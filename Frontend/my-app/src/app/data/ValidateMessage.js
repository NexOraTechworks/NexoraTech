
export function validateMessage(message) {
    const text = message.trim();
  
    if (text.length < 20) {
      return "Please enter a message with at least 20 characters.";
    }
  
    if (text.length > 2000) {
      return "Your message cannot exceed 2000 characters.";
    }
  
    // Reject messages containing only symbols or numbers
    const letters = text.match(/[a-z]/gi) || [];
  
    if (letters.length < 10) {
      return "Please enter a meaningful message.";
    }
  
    // Reject excessive repeated characters: aaaaaaaa
    if (/(.)\1{6,}/i.test(text)) {
      return "Please avoid repeated characters.";
    }
  
    // Reject keyboard mashing: qwertyuiop, asdfghjkl
    const words = text.toLowerCase().match(/[a-z]+/g) || [];
    const keyboardPatterns = [
      "qwertyuiop",
      "asdfghjkl",
      "zxcvbnm",
      "poiuytrewq",
      "lkjhgfdsa",
      "mnbvcxz"
    ];
  
    for (const word of words) {
      if (
        keyboardPatterns.some(pattern =>
          pattern.includes(word) && word.length >= 7
        )
      ) {
        return "Please enter a genuine message, not random characters.";
      }
    }
  
    // Reject long strings of consonants
    if (/[bcdfghjklmnpqrstvwxyz]{8,}/i.test(text)) {
      return "Your message appears to contain random characters.";
    }
  
    return null; // Message passed these checks
  }