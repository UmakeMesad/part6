import React from 'react';
import project_icon from '../../assets/img/project-icon.svg'
import worklist from '../../assets/img/work-list.svg'
import board from '../../assets/img/board.svg'
import setting from '../../assets/img/setting.svg'
import add_issues from '../../assets/img/add-issues.svg'
import edit_issues from '../../assets/img/edit-issues.svg'
import useNavbar from '../../talons/navbar';


const Dashboard = props => {
    const talonProps = useNavbar();
    const {
            handleNavbarToWorklist,
            handleNavbarToYourProject,
            handleNavbarToSettingProject,
            } = talonProps;

    function hide_dropdown(){
    
        document.getElementById("notification-dropdown-container").style.display = "none";
        document.getElementById("user-dropdown-container").style.display = "none";
        document.getElementById("search-dropdown-container").style.display = "none";
      
      }
    
      function enable_editing(){
        let project_textarea = document.getElementById("project-description-textarea");
        document.getElementById("project-description-textarea").removeAttribute('readonly');
        project_textarea.style.border = "1px solid #71B7FF";
      }
    
      
      function disable_editing(){
        let project_textarea = document.getElementById("project-description-textarea");
        document.getElementById("project-description-textarea").readOnly = true;
        project_textarea.style.border = "1px solid #e3e3e300";
      }
    
      function show_add_people(){
        document.getElementById("overlay2").style.display = "block";
      }
    
      function close_search_people(){
        document.getElementById("overlay2").style.display = "none";
      }
    
      function show_search_people_dropdown(){
        var search_people_dropdown = document.getElementById("search-people-dropdown");
        if(search_people_dropdown.style.display == "none"){
          search_people_dropdown.style.display = "block";
        }
        else{
          search_people_dropdown.style.display = "none";
        }
      }
     function show_right_workspace(){
      var right_workspace = document.getElementById("right-workspace");
      if(right_workspace.style.display=="none")
      {
        right_workspace.style.display ="block"
     }
     else{
      right_workspace.style.display ="none"
     }
     }
    
     function close_right_workspace(){
      document.getElementById("right-workspace").style.display ="none";
     }
    
     function delete_sprint_button(){
      document.getElementById("overlay-delete-sprint").style.display = "none";
      const element = document.getElementById("sub-sprint-container-template");
      element.remove();
     }
    
    function close_delete_sprint_window(){
      document.getElementById("overlay-delete-sprint").style.display = "none";
    }
    function open_delete_sprint_window(){
      document.getElementById("overlay-delete-sprint").style.display = "block";
    }
    
    function close_create_sprint_window(){
      document.getElementById("overlay-create-sprint").style.display = "none";
    }
    function open_create_sprint_window(){
      document.getElementById("overlay-create-sprint").style.display = "block";
    }
    function close_create_issues_window(){
      document.getElementById("overlay-create-issues").style.display = "none";
    }
    function open_create_issues_window(){
      document.getElementById("overlay-create-issues").style.display = "block";
    }
    
    function close_edit_sprint_window(){
      document.getElementById("overlay-edit-sprint").style.display = "none";
    }
    
    function open_edit_sprint_window(){
      document.getElementById("overlay-edit-sprint").style.display = "block";
    }

    return (
<div className="container">
      <div id='overlay2' className="overlay2">
      <div className="add-people-window">
        <div className="add-people-container">

          <div className="add-people-header">
            <div className="add-people-title">Add people</div>
          </div>

          <div className="add-people-body">
            <div className="search-people-container">
              <input onClick={show_search_people_dropdown} type="text" placeholder="Search for name, email."/>
              <div id="search-people-dropdown">
                <a>Placeholder</a>
              </div>
            </div>
          </div>

          <div className="add-people-footer">
            <button onClick={close_search_people}>Cancel</button>
            <button>Add</button>
          </div>

        </div>
      </div>
      </div>
      <div className="overlay-delete-sprint" id="overlay-delete-sprint">
          <div className="delete-sprint-window">
              <div className="delete-sprint-container">

                <div className="delete-sprint-header">
                  <div className="delete-sprint-title">Delete sprint</div>
                </div>

                <div className="delete-sprint-body">
                  <p>Are you sure want to delete this sprint ?</p>
                </div>

                <div className="delete-sprint-footer">
                  <button onClick={close_delete_sprint_window}>Cancel</button>
                  <button onClick={delete_sprint_button}>Delete</button>
                </div>

              </div>
            </div>
      </div>

      <div className="overlay-create-sprint" id="overlay-create-sprint">
          <div className="create-sprint-window">
              <div className="create-sprint-container">

                <div className="create-sprint-header">
                  <div className="create-sprint-title">Create sprint</div>
                </div>

                <div className="create-sprint-body">
                  <div className="create-sprint-name">
                    <p>Sprint name</p>
                    <input type="text" placeholder='Sprint name' />
                  </div>
                  <div className="create-sprint-start-date">
                    <p>Start date</p>
                    <input type="date" />
                  </div>
                  <div className="create-sprint-end-date">
                    <p>End date</p>
                    <input type="date" />
                  </div>
                </div>

                <div className="create-sprint-footer">
                  <button onClick={close_create_sprint_window}>Cancel</button>
                  <button>Create</button>
                </div>

              </div>
            </div>
      </div>

      <div className="overlay-create-issues" id='overlay-create-issues'>
        <div className="create-issues-window">
              <div className="create-issues-container">

                <div className="create-issues-header">
                  <div className="create-issues-title">Create issues</div>
                </div>

                <div className="create-issues-body">
                  <div className="create-issues-name">
                    <p>Issues name</p>
                    <input type="text" placeholder='Issues name' />
                  </div>
                  <div className="create-issues-assign-member">
                    <p>Assign</p>
                    <select name="" id="">
                      <option value="">Dinh Tuan Cuong</option>
                      <option value="">Dinh Quang Son</option>
                      <option value="">Nguyen The Thang</option>
                      <option value="">Do Ha Chi</option>
                      <option value="">Doan Thuan An</option>
                      <option value="">Nguyen Hoai Phuong</option>
                    </select>
                  </div>
                </div>
                <div className="create-issues-footer">
                  <button onClick={close_create_issues_window}>Cancel</button>
                  <button>Create</button>
                </div>

              </div>
          </div>
      </div>

      <div className="overlay-edit-sprint" id="overlay-edit-sprint">
          <div className="edit-sprint-window">
              <div className="edit-sprint-container">

                <div className="edit-sprint-header">
                  <div className="edit-sprint-title">Edit sprint</div>
                </div>

                <div className="edit-sprint-body">
                  <div className="edit-sprint-name">
                    <p>Sprint name</p>
                    <input type="text" placeholder='Sprint name' />
                  </div>
                  <div className="edit-sprint-start-date">
                    <p>Start date</p>
                    <input type="date" />
                  </div>
                  <div className="edit-sprint-end-date">
                    <p>End date</p>
                    <input type="date" />
                  </div>
                </div>

                <div className="edit-sprint-footer">
                  <button onClick={close_edit_sprint_window}>Cancel</button>
                  <button>Update</button>
                </div>

              </div>
            </div>
      </div>
      
      <div className="workspace" onClick={hide_dropdown}>

        <div className="left-workspace">
          <div className="left-workspace-project-icon">
            <img src={project_icon}/>
          </div>
          <div className="left-workspace-project-name">
            Group Project 2022 - 2023
          </div>
          <div className="left-workspace-project-three-button">
            <div onClick={handleNavbarToWorklist} className="work-list-btn">
              <img src={worklist}/>
              <a>Work list</a>
            </div>
            <div onClick={handleNavbarToYourProject} className="board-btn">
              <img src={board}/>
              <a>Board</a>
            </div>
            <div onClick={handleNavbarToSettingProject} className="setting-btn">
              <img className="settingimage" src={setting}/>
              <a>Setting</a>
            </div>
            
          </div>
          <div className="left-workspace-project-member">
            <div className="project-member-number">
              <p>Member</p>
              <p>3</p>
            </div>
            <div className="project-member-list">
              <div className="member-card-temp">
                Dinh Tuan Cuong
              </div>
              <div className="member-card-temp">
                Dinh Quang Son
              </div>
              <div className="member-card-temp">
                Nguyen Hoai Phuong
              </div>
            </div>
          </div>
          <div className="add-member-container">
            <button className="add-member-btn" onClick={show_add_people}>Add people</button>
          </div>
        </div>

        <div className="middle-workspace">

          <div><button className="create-new-sprint-button" onClick={open_create_sprint_window}>Create new sprint</button></div>

          <div className="sprint-container">

            <div id="sub-sprint-container-template" className="sub-sprint-container-template">

              <div className="sub-sprint-template-header">
                <div className="sub-sprint-name">Sprint 1</div>
                <div className="sub-sprint-date">2 December - 25 December</div>
                <div className="add-issues-button">
                  <img src={add_issues} onClick={open_create_issues_window}/>
                </div>
                <div className="edit-issues-button">
                  <img src={edit_issues} onClick={open_edit_sprint_window}/>
                </div>
                <button className="delete-issues-button" onClick={open_delete_sprint_window}>Delete</button>
              </div>

              

              <div className="sub-sprint-template-body">

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Thang</div>
                  <div className="issues-card-template-number">12</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>

                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>
                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>
                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>
                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>
                <div className="issues-card-template" onClick={show_right_workspace} >
                  <div className="issues-card-template-name">Son</div>
                  <div className="issues-card-template-number">24</div>
                </div>
              </div>
            </div>

            

          </div>
          <div className="sprint-container">

<div id="sub-sprint-container-template" className="sub-sprint-container-template">

  <div className="sub-sprint-template-header">
    <div className="sub-sprint-name">Sprint 2</div>
    <div className="sub-sprint-date">25 December - 12 Janaury</div>
    <div className="add-issues-button">
      <img src={add_issues} onClick={open_create_issues_window}/>
    </div>
    <div className="edit-issues-button">
      <img src={edit_issues} onClick={open_edit_sprint_window}/>
    </div>
    <button className="delete-issues-button" onClick={open_delete_sprint_window}>Delete</button>
  </div>

  

  <div className="sub-sprint-template-body">

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Thang</div>
      <div className="issues-card-template-number">12</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
  </div>
</div>
<div id="sub-sprint-container-template" className="sub-sprint-container-template">

  <div className="sub-sprint-template-header">
    <div className="sub-sprint-name">Sprint 2</div>
    <div className="sub-sprint-date">25 December - 12 Janaury</div>
    <div className="add-issues-button">
      <img src={add_issues} onClick={open_create_issues_window}/>
    </div>
    <div className="edit-issues-button">
      <img src={edit_issues} onClick={open_edit_sprint_window}/>
    </div>
    <button className="delete-issues-button" onClick={open_delete_sprint_window}>Delete</button>
  </div>

  

  <div className="sub-sprint-template-body">

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Thang</div>
      <div className="issues-card-template-number">12</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>

    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
    <div className="issues-card-template" onClick={show_right_workspace} >
      <div className="issues-card-template-name">Son</div>
      <div className="issues-card-template-number">24</div>
    </div>
  </div>
</div>
</div>

        </div>

        <div id ='right-workspace' className="right-workspace">

          <div className="right-workspace-header">
            <div id="project-name-container">Thang</div>
            <button onClick={close_right_workspace} className="delete-project-button">Delete</button>
          </div>

          <div className="right-workspace-body">
            <div className="right-workspace-project-description">
              <p>Description</p>
              <textarea readOnly name="" id="project-description-textarea" cols="35" rows="5">
                Sample description
              </textarea>
              <div className="project-description-button">
                <button onClick={disable_editing}>Save</button>
                <button onClick={enable_editing}>Edit</button>
              </div>
            </div>
            <div className="right-workspace-assigne">
              <div className="assigne-by">
                <p>By:</p>
                <div className="assigne-by-name">
                  Dinh Tuan Cuong
                </div>
              </div>
              <div className="assigne-to">
                <p>To:</p>
                <div className="assigne-to-name">
                  <select name="" id="">
                    <option value="">Nguyen The Thang</option>
                    <option value="">Dinh Quang Son</option>
                    <option value="">Nguyen Hoai Phuong</option>
                    <option value="">Do Ha Chi</option>
                    <option value="">Doan Thuan An</option>
                  </select>
                </div>
              </div>
            </div>
          </div>


        </div>
        
      </div>
</div>
    )
}

export default Dashboard;