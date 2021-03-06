export const loginCurrentUser = user => ({
  type: 'LOG_IN',
  user
});

export const logoutCurrentUser = () => ({
  type: 'LOG_OUT'
});

export const setNewUser = user => ({
  type: 'SET_NEW_USER',
  user
});

export const loadMentors = mentors => ({
  type: 'LOAD_MENTORS',
  mentors
})

export const loadMessages = messages => ({
  type: 'LOAD_MESSAGES',
  messages
})

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
})

export const filterMentors = mentors => ({
  type: 'FILTER_MENTORS',
  mentors
})
