const Button = ({children}) => {
    return (
        <button className="bg-purple-400 dark:bg-yellow-300 text-lg text-teal-200 dark:text-teal-600 rounded-lg px-3"
                onClick={() => alert(`thanks to ${children}`)}
        >
            {children}
        </button>
    );
}

export default Button;
