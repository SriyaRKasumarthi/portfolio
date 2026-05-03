import { useState, useCallback } from 'react';

export const TWEAK_DEFAULTS = {
  paperTop: '#fbf7ed',
  paperBottom: '#f5eedd',
  ink: '#1a1612',
  accent: '#7a1f1f',
  grain: 0.45,
  bodySize: 17,
  headlineWeight: 'bold',
};

export function useTweaks(defaults = TWEAK_DEFAULTS) {
  const [values, setValues] = useState(defaults);
  const setTweak = useCallback((keyOrEdits, val) => {
    const edits =
      typeof keyOrEdits === 'object' && keyOrEdits !== null
        ? keyOrEdits
        : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    }
  }, []);
  return [values, setTweak];
}
