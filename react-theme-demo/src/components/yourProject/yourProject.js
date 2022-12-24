import React from 'react';
import project_icon from '../../assets/img/project-icon.svg'
import worklist from '../../assets/img/work-list.svg'
import board from '../../assets/img/board.svg'
import setting from '../../assets/img/setting.svg'
import add_issues from '../../assets/img/add-issues.svg'
import edit_issues from '../../assets/img/edit-issues.svg'
import useNavbar from '../../talons/navbar';


import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../yourProject/mockData'
import { useState } from 'react'
import Card from '../yourProject/card'


function YourProject({selected, setSelected}){
  const [isActive,setIsActive] = useState(false);
  const [data, setData] = useState(mockData);
  const options = ['Sprint 2','Sprint 3', 'Sprint 4','Sprint 5']

  const onDragEnd = result => {
      if (!result.destination) return
      const { source, destination } = result

      if (source.droppableId !== destination.droppableId) {
          const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
          const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

          const sourceCol = data[sourceColIndex]
          const destinationCol = data[destinationColIndex]

          const sourceTask = [...sourceCol.tasks]
          const destinationTask = [...destinationCol.tasks]

          const [removed] = sourceTask.splice(source.index, 1)
          destinationTask.splice(destination.index, 0, removed)

          data[sourceColIndex].tasks = sourceTask
          data[destinationColIndex].tasks = destinationTask

          setData(data)
      }
  }

  
    const talonProps = useNavbar();
    const { handleNavbarToWorklist,
            handleNavbarToYourProject,
            handleNavbarToSettingProject,
            } = talonProps;

    function hide_dropdown(){
    
        document.getElementById("notification-dropdown-container").style.display = "none";
        document.getElementById("user-dropdown-container").style.display = "none";
        document.getElementById("search-dropdown-container").style.display = "none";
      
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

      <div className="workspace2" onClick={hide_dropdown}>

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

        <div className="board-workspace">
            <div className="board-header">
              <div className = "sprint-dropdown">
                <div className="sprint-dropdown-btn" onClick ={(e) =>
                setIsActive(!isActive)}>
                  {selected}
                </div>
                {isActive && (
                  <div className="sprint-dropdown-content">
                    {options.map((option) => (
                      <div 
                          onClick={(e) => {
                            setSelected(option);
                            setIsActive(false);
                      }}
                      className="sprint-dropdown-item">
                      {option} 
                      </div>
                    ))}         
                </div>
                )}
                </div>
                <div className="sprint-start-date-display">Nov 1</div>-
                <div className="sprint-end-date-display">Nov 25</div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {
                    data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    className="kanban__section"
                                    ref={provided.innerRef}
                                >
                                    <div className="kanban__section__title">
                                        {section.title}
                                    </div>
                                    <div className="kanban__section__content">
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            <Card>
                                                                {task.title}
                                                            </Card>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
        </div>

        
      </div>
</div>
    )
}

export default YourProject;