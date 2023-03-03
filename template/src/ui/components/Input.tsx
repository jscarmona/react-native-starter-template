import styled from '@emotion/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  ViewProps,
} from 'react-native';

interface InputProps extends ViewProps {
  TextInputProps?: RNTextInputProps;
}

const TextInputContainer = styled.View(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: theme.palette.border.default,
  backgroundColor: theme.palette.background.default,
  borderRadius: 8,
  flexDirection: 'row',
}));

const TextInput = styled.TextInput(({ theme, multiline, numberOfLines }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: 8,
  backgroundColor: 'transparent',
  fontSize: 16,
  lineHeight: 24,
  height: multiline ? (numberOfLines || 1) * 24 : 40,
  textAlignVertical: 'top',
  color: theme.palette.text.primary,
}));

export function Input({ TextInputProps, ...props }: InputProps) {
  const [scrollEnabled, setScrollEnabled] = useState(!TextInputProps?.multiline);
  const scrollEnabledTimeout = useRef<NodeJS.Timeout>();

  const handleFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      scrollEnabledTimeout.current = setTimeout(() => {
        setScrollEnabled(true);
      }, 800);

      TextInputProps?.onFocus?.(event);
    },
    [TextInputProps],
  );

  const handleBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setScrollEnabled(!TextInputProps?.multiline);
      clearTimeout(scrollEnabledTimeout.current);

      TextInputProps?.onBlur?.(event);
    },
    [TextInputProps],
  );

  useEffect(() => {
    return () => clearTimeout(scrollEnabledTimeout.current);
  }, []);

  return (
    <TextInputContainer {...props}>
      <TextInput
        {...TextInputProps}
        textAlignVertical="top"
        onBlur={handleBlur}
        onFocus={handleFocus}
        scrollEnabled={scrollEnabled}
      />
    </TextInputContainer>
  );
}
