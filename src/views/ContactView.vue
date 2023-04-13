<template>
  <div class="">
    <h1>Contacts List</h1>

    <div class="col-sm-6 col-md-4" v-for = "(contact, key) in contacts" :key = 'key'>
      <div class="thumbnail">
        <img :src="`${contact.imageUrl}`" width="160">
        <!-- <img :src="`./src/assets/${contact.imageUrl}`" width="160"> -->
        <div class="caption">
          <p><b>{{contact.firstname}} {{contact.lastname}}</b></p>
          <p>Mobile : {{contact.mobile}}</p>
          <p>Email : {{contact.email}}</p>
          <p>Facebook : {{contact.facebook}}</p>
          <!-- <p class="detail">{{contact.detail}}</p>
          <RouterLink :to = "{path: 'detail', name:'detail', params: {contact: contact.name}}">
            <button class="btn btn-success" role="button">Detail</button>
          </RouterLink> -->
          
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { 
    collection,
    onSnapshot,
    doc, 
    getFirestore, 
    setDoc, 
    updateDoc, 
    deleteDoc} 
    from 'firebase/firestore'

    export default{
      name: 'ContactView',
      data(){
        return{
          contacts:{},
          contactIds:{},
        }
      },
      mounted(){
        //connect to db in firebase
        const db = getFirestore()
        const colRef = collection(db,"contacts")
        onSnapshot(colRef, snapshot => {
          this.contacts = snapshot.docs.map(doc => doc.data())
          this.contactIds = snapshot.docs.map(doc => doc.id)
          console.log(this.contacts)
          console.log(this.contactIds)
        })
      },
      methods: {
        
      }
    }

</script>


<style>
  @media (min-width: 1024px) {
    /* .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    } */
  }

</style>