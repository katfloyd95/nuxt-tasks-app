<template>
	<nav class="container">
		<ul>
			<NuxtLink to="/">Tasks App</NuxtLink>
		</ul>
		<ul>
			<NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink>
		</ul>
	</nav>
</template>
