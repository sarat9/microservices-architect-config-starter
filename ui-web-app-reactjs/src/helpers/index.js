export const cn = (...args) => {
  const classNames = args.reduce((arr, thing) => {
    if (typeof thing === 'string') return [...arr, ...thing.split(' ')] // Strings.
    if (({}).toString.call(thing) !== '[object Object]') return arr // Ignore everything else but objects.

    return Object
      .keys(thing)
      .reduce((arr2, key) => (thing[key] ? [...arr2, key] : arr2), arr)
  }, [])

  // Avoid duplicate names.
  return [...new Set(classNames)].join(' ')
}

// http://bit.ly/2Xmuwqf - micro UUID!
export const uuid = a=>a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// Simple email validation :)
export const isEmail = email => {
  return [
    email.includes('@'), // Has the @ sybmol.
    email.trim().split('@')[0].length, // Has characters before the @ symbol.
    email.split('@').pop().includes('.'), // Has a period after the @ symbol.
    !email.trim().includes(' '), // Doesn't contain spaces.
    email.length > 5, // At least 6 chars long => a@b.co

    // Ensure at least 2 characters in the `.com` portion.
    email.trim().split('@').pop().split('.').pop().length > 1
  ].every(Boolean)
}
