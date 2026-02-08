<script lang="ts" setup>
interface Task {
	id: number;
	title: string;
	done: boolean;
}

const { data: tasks, error, status } = await useFetch<Task[]>("/api/tasks", {
	lazy: true,
});
</script>

<template>
	<div>
		<article
			v-if="status === 'pending'"
			aria-busy="true"
		/>
		<div v-else>
			<article
				v-for="task in tasks"
				:key="task.id"
			>
				{{ task.title }}
			</article>
		</div>
	</div>
</template>
