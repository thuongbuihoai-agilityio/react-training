import { Component, ReactNode } from "react";
import Button from "../Button";
import styleError from "./errorBoundary.module.css";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styleError.error} data-testid="error-boundary">
          <h1 className={styleError["error-title"]}>Something went wrong.</h1>
          <Button
            onClick={() => this.setState({ hasError: false })}
            icon
            text="Try again"
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
