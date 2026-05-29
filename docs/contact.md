# Contact form

This portfolio contact form does not use third-party form APIs.

## Behavior
- Input validation happens client-side.
- On submit, the user’s default mail client opens via `mailto:` with:
  - Subject: `[Portfolio] <subject>`
  - Body: includes name/email/message

## Testing
- Tab through fields and submit.
- Confirm `#cf-status` updates for success/error and that focus moves to the first invalid field.

