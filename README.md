# Rehersa Practice – React Navigation Assignment 2

Expo (React Native) mock-interview practice app. Idea is a small companion to the Rehersa FYP.

## Run

```bash
npm install
# (project is on Expo SDK 57 – matches the current Expo Go from the Play Store)
npx expo start --tunnel   # tunnel works on any network; or plain `npx expo start` on same Wi-Fi
```

## Navigation structure (3 navigators, nested)

```
Drawer (RootDrawer.js)
├── Home  ─► Bottom Tabs (HomeTabs.js)
│            ├── Practice ─► Stack (PracticeStack.js)
│            │               ├── InterviewList
│            │               ├── InterviewDetail   (param: interview)
│            │               ├── Session           (param: interview)
│            │               ├── Feedback          (params: interviewTitle, average, ratings, questions)
│            │               └── AddInterview      (modal)
│            ├── Saved
│            └── Profile
├── History
└── About
```

## Where each requirement is demonstrated

| Requirement | File | How |
|---|---|---|
| Pass data via route params | `InterviewListScreen.js`, `InterviewDetailScreen.js`, `SessionScreen.js`, `SavedScreen.js` | `navigation.navigate('InterviewDetail', { interview: item })`; Saved tab uses nested form `navigate('Practice', { screen: 'InterviewDetail', params })` |
| Display received params | `InterviewDetailScreen.js`, `SessionScreen.js`, `FeedbackScreen.js` | `const { interview } = route.params` |
| Customise header options | `PracticeStack.js`, `HomeTabs.js`, `RootDrawer.js` | Shared `headerStyle` (colour/tint/title style); dynamic title from params on `InterviewDetail`/`Session`; `headerBackVisible: false`; `presentation: 'modal'`; `headerShown: false` for nested navigators |
| Header button with meaningful action | `PracticeStack.js`, `BookmarkButton.js` | Hamburger = open drawer; "+" = navigate to AddInterview; bookmark = update shared data + Alert; "Quit" = Alert then `popToTop()`; "Done" = `popToTop()` |
| Combination of navigators | `RootDrawer.js`, `HomeTabs.js`, `PracticeStack.js` | Drawer → Tabs → Stack |

## Viva notes

- **Why `headerShown: false` on Home and Practice?** Each nested navigator would otherwise draw a second header; only the innermost visible one should.
- **How does the hamburger work from inside the stack?** `navigation.dispatch(DrawerActions.openDrawer())` – an action the child can't handle bubbles up to the parent Drawer.
- **Why `navigation.replace('Feedback', …)`?** So Back doesn't return into a finished session.
- **Why a function for `options`?** `options={({ route, navigation }) => ({...})}` gives access to `route.params` (dynamic title) and `navigation` (header buttons).
- **Why is the bookmark button a component?** `options` is not a component, so it can't use hooks; `BookmarkButton` is rendered inside the provider and can call `useApp()`.
- **Shared state:** `AppContext` holds interviews, saved ids and history so all navigators see the same data.
