<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">

       <TabView>
					<TabPanel header="Overview">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.</p></TabPanel>
					<TabPanel header="Roles">
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
							ratione voluptatem sequi nesciunt.
							Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
					</TabPanel>
					<TabPanel header="Permissions">
						<div class="content" id="tab3">
            <div class="permision-action-block">
              <div class="action-block">
                <div class="left-bx">
                  <a href="#" class="links">Application-Enterprise-Architect</a>
                </div>
                <div class="right-bx">
                  <div class="d-box">
                    <a href="#"><i class="fas fa-trash"></i> Delete</a>
                  </div>
                  <div class="files-new">
                    <a href="#"> <i class="far fa-file"></i> New</a>
                  </div>
                </div>
              </div>

              <div class="user-details-block">
                <ul>
                  <li>
                    <p class="header-titel">Role</p>
                    <p class="detaisl-tags">Application-Enterprise-Architect</p>
                  </li>
                  <li>
                    <p class="header-titel">Description</p>
                    <p class="detaisl-tags">No description specified</p>
                  </li>
                  <li>
                    <p class="disclose-desc">Only for iturm-installs: Roles are created and modification in the external application itune</p>
                  </li>
                </ul>
                <div class="sub-role-box">
                  <ul>
                    <li>
                      <p class="header-titel">Description</p>
                      <p class="detaisl-tags">No description specified</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            

            <div class="permision-block-listing">
              <div class="top-guid-box">
                <div class="left-box">Permision to edit Building BLock Types</div>
                <div class="right-box">
                  <div class="enable-permision inner"><i class="fas fa-check-square"></i> <span class="lable-title">Enabled Permissions</span></div>
                  <div class="inherited-permision inner"><i class="fas fa-check-square"></i> <span class="lable-title">Inherited Permission from<br>subordinate Roles</span></div>
                  <div class="enable-inherite-permision inner"><i class="fas fa-check-square"></i> <span class="lable-title">Enabled Permission and <br>Inherited Permission</span></div>
                </div>
              </div>
              <div class="listing-user-box">
                <table class="responsive-table-input-matrix">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Read/Menu item</th>
                    <th>Update</th>
                    <th>Create</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr>
                    <td>Architectural Domains</td>
                    <td> <input type="checkbox" id="item1"><label for="item1"></label></td>
                    <td> <input type="checkbox" id="item2"><label for="item2"></label></td>
                    <td> <input type="checkbox" id="item3"><label for="item3"></label></td>
                    <td> <input type="checkbox" id="item4"><label for="item4"></label></td>
                    
                  </tr>
                  <tr>
                    <td>Business Domains</td>
                    <td> <input type="checkbox" id="item11"><label for="item11"></label></td>
                    <td> <input type="checkbox" id="item12"><label for="item12"></label></td>
                    <td> <input type="checkbox" id="item13"><label for="item13"></label></td>
                    <td> <input type="checkbox" id="item14"><label for="item14"></label></td>
                  </tr>
                  <tr>
                  <td>Architectural Domains</td>
                    <td> <input type="checkbox" id="item21"><label for="item21"></label></td>
                    <td> <input type="checkbox" id="item22"><label for="item22"></label></td>
                    <td> <input type="checkbox" id="item23"><label for="item23"></label></td>
                    <td> <input type="checkbox" id="item24"><label for="item24"></label></td>
                  </tr>
                  <tr>
                    <td>Architectural Domains</td>
                    <td> <input type="checkbox" id="item31"><label for="item31"></label></td>
                    <td> <input type="checkbox" id="item32"><label for="item32"></label></td>
                    <td> <input type="checkbox" id="item33"><label for="item33"></label></td>
                    <td> <input type="checkbox" id="item34"><label for="item34"></label></td>               
                  </tr>
                  <tr>
                    <td>Architectural Domains</td>
                    <td> <input type="checkbox" id="item41"><label for="item41"></label></td>
                    <td> <input type="checkbox" id="item42"><label for="item42"></label></td>
                    <td> <input type="checkbox" id="item43"><label for="item43"></label></td>
                    <td> <input type="checkbox" id="item44"><label for="item44"></label></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
					</TabPanel>
				</TabView>
			</div>
		</div>

	</div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: "register",
            activeCard: "",
            selectDropdownOptions1: null,
            selectDropdownOptions2: null,
            birthDate: null,
            checked: false,
            radioButton1: '',
            dropdownOptions1: [
                {label: 'UTC-12.00', value: {id: 1, name: 'UTC-12.00', code: '-12'}},
                {label: 'UTC-11.00', value: {id: 2, name: 'UTC-11.00', code: '-11'}},
                {label: 'UTC-10.00', value: {id: 3, name: 'UTC-10.00', code: '-10'}},
                {label: 'UTC-09.30', value: {id: 4, name: 'UTC-09.30', code: '-93'}},
                {label: 'UTC-09.00', value: {id: 5, name: 'UTC-09.00', code: '-09'}},
                {label: 'UTC-08.00', value: {id: 6, name: 'UTC-08.00', code: '-08'}},
                {label: 'UTC-07.00', value: {id: 7, name: 'UTC-07.00', code: '-07'}},
                {label: 'UTC-06.00', value: {id: 8, name: 'UTC-06.00', code: '-06'}},
                {label: 'UTC-05.00', value: {id: 9, name: 'UTC-05.00', code: '-05'}},
                {label: 'UTC-04.00', value: {id: 10, name: 'UTC-04.00', code: '-04'}},
                {label: 'UTC-03.30', value: {id: 11, name: 'UTC-03.30', code: '-33'}},
                {label: 'UTC-03.00', value: {id: 12, name: 'UTC-03.00', code: '-03'}},
                {label: 'UTC-02.00', value: {id: 13, name: 'UTC-02.00', code: '-02'}},
                {label: 'UTC-01.00', value: {id: 14, name: 'UTC-01.00', code: '-01'}},
                {label: 'UTC-+00.00', value: {id: 15, name: 'UTC-+00.00', code: '-00'}},
                {label: 'UTC+01.00', value: {id: 16, name: 'UTC+01.00', code: '+01'}},
                {label: 'UTC+02.00', value: {id: 17, name: 'UTC+02.00', code: '+02'}},
                {label: 'UTC+03.00', value: {id: 18, name: 'UTC+03.00', code: '+03'}},
                {label: 'UTC+03.30', value: {id: 19, name: 'UTC+03.30', code: '+33'}},
                {label: 'UTC+04.00', value: {id: 20, name: 'UTC+04.00', code: '+04'}},
                {label: 'UTC+04.30', value: {id: 21, name: 'UTC+04.30', code: '+43'}},
                {label: 'UTC+05.00', value: {id: 22, name: 'UTC+05.00', code: '+05'}},
                {label: 'UTC+05.30', value: {id: 23, name: 'UTC+05.30', code: '+53'}},
                {label: 'UTC+05.45', value: {id: 24, name: 'UTC+05.45', code: '+54'}},
                {label: 'UTC+06.00', value: {id: 25, name: 'UTC+06.00', code: '+06'}},
                {label: 'UTC+06.30', value: {id: 26, name: 'UTC+06.30', code: '+63'}},
                {label: 'UTC+07.00', value: {id: 27, name: 'UTC+07.00', code: '+07'}},
                {label: 'UTC+08.00', value: {id: 28, name: 'UTC+08.00', code: '+08'}},
                {label: 'UTC+08.45', value: {id: 29, name: 'UTC+08.45', code: '+84'}},
                {label: 'UTC+09.00', value: {id: 30, name: 'UTC+09.00', code: '+09'}},
                {label: 'UTC+09.30', value: {id: 31, name: 'UTC+09.30', code: '+93'}},
                {label: 'UTC+10.00', value: {id: 32, name: 'UTC+10.00', code: '+10'}},
                {label: 'UTC+10.30', value: {id: 33, name: 'UTC+10.30', code: '+13'}},
                {label: 'UTC+11.00', value: {id: 34, name: 'UTC+01.00', code: '+11'}},
                {label: 'UTC+12.00', value: {id: 35, name: 'UTC+01.00', code: '+12'}},
                {label: 'UTC+12.45', value: {id: 36, name: 'UTC+01.00', code: '+24'}},
                {label: 'UTC+13.00', value: {id: 37, name: 'UTC+01.00', code: '+13'}},
                {label: 'UTC+14.00', value: {id: 38, name: 'UTC+01.00', code: '+14'}},
            ],
            dropdownOptions2: [
                {label: 'Where did you hear Babylon', value: null},
                {label: 'Blogs', value: 'Blogs'},
                {label: 'Google Ads', value: 'google'},
                {label: 'Your Forum', value: 'prime-forum'},
                {label: 'Youtube', value: 'Youtube'},
                {label: 'Reddit', value: 'Reddit'},
                {label: 'Events', value: 'Events'},
                {label: 'Other', value: 'Other'}
            ]
        }
    },
    methods: {
        clickNext(step) {
            this.activeTab = step;
        },

        selectTier(card) {
            this.activeCard = card;
        }
    }
}
</script>