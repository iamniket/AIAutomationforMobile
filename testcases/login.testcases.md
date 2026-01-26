# Login Screen – Test Cases
Source: contracts/login.ui.json  
Note: Backend is not available. All tests validate UI behavior only.

---

## 🟢 Happy Path

### TC-LP-01: Login with valid email and password
Status: KEEP

- Steps:
  1. Enter valid email in Email field
  2. Enter valid password in Password field
  3. Tap Login button
- Expected Result:
  - Login action is triggered
  - Loading indicator is displayed (if applicable)
  - No validation error message is shown

---

### TC-LP-02: Login with Remember Me checked
Status: IGNORE  
Reason: Depends on session persistence and backend behavior

- Steps:
  1. Enter valid email
  2. Enter valid password
  3. Check Remember Me
  4. Tap Login button
- Expected Result:
  - Session persistence cannot be validated without backend

---

## 🔴 Negative Test Cases

### TC-LN-01: Login with invalid email format
Status: KEEP

- Steps:
  1. Enter invalid email (e.g., `abc123`)
  2. Enter valid password
  3. Tap Login
- Expected Result:
  - Email format validation error is displayed
  - Login action is not triggered

---

### TC-LN-02: Login with empty email
Status: KEEP

- Steps:
  1. Leave Email field empty
  2. Enter valid password
  3. Tap Login
- Expected Result:
  - Email required validation error is displayed

---

### TC-LN-03: Login with empty password
Status: KEEP

- Steps:
  1. Enter valid email
  2. Leave Password field empty
  3. Tap Login
- Expected Result:
  - Password required validation error is displayed

---

### TC-LN-04: Login with both email and password empty
Status: KEEP

- Steps:
  1. Leave Email field empty
  2. Leave Password field empty
  3. Tap Login
- Expected Result:
  - Required field validation errors are displayed
  - Login action is blocked

---

## 🟡 Validation Test Cases

### TC-LV-01: Email max length validation
Status: KEEP

- Steps:
  1. Enter email longer than 50 characters
  2. Enter valid password
  3. Tap Login
- Expected Result:
  - Email input rejects additional characters or
  - Email length validation error is displayed

---

### TC-LV-02: Password minimum length validation
Status: KEEP

- Steps:
  1. Enter valid email
  2. Enter password with fewer than 8 characters
  3. Tap Login
- Expected Result:
  - Password length validation error is displayed
  - Login action is blocked

---

## 🔵 UI Behavior Test Cases

### TC-LU-01: Toggle password visibility
Status: IGNORE  
Reason: Cosmetic UI behavior, low business risk

- Steps:
  1. Enter password
  2. Tap password visibility toggle
- Expected Result:
  - Password text toggles between masked and unmasked

---

### TC-LU-02: Error message visibility
Status: KEEP

- Steps:
  1. Trigger any login validation error
- Expected Result:
  - Error message container is visible
  - Error message text is readable

---

### TC-LU-03: Forgot Password navigation
Status: IGNORE  
Reason: Target screen not implemented yet

- Steps:
  1. Tap Forgot Password link
- Expected Result:
  - Navigation cannot be validated at this stage
