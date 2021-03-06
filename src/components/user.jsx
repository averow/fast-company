import React from "react";
import Quality from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    const { user } = props;

    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => (
                    <Quality
                        key={item._id}
                        name={item.name}
                        color={item.color}
                    />
                ))}
            </td>

            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark
                    status={user.bookmark}
                    onToggleBookMark={props.onToggleBookMark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    className={"btn btn-danger"}
                    onClick={() => props.onDelete(user._id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
