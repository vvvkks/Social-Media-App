import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
        let curPF = (props.currentPage - 5) < 0 ? 0 : props.currentPage - 5;
        let curPL = props.currentPage + 5;
        let slicedPages = pages.slice(curPF, curPL);
        return <div>
            <div>
                {slicedPages.map((p) => (
                    <span
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : null}
                        onClick={() => props.onPageChanged(p)}
                    >{p}
                        </span>
                ))}
            </div>

            {
                props.users.map(u => <div key={u.id}>
          <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
              <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt="Content"
              />
                </NavLink>
            </div>
            <div>
              {u.followed ? (
                  <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                  <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
                        <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
                    </div>
                )}
        </div>
    }
export default Users;