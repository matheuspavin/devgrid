const gistComments = function (gist) {
    if (gist === 'fa4ad4071fcd10df7700882d8bc0ed4f') {
        return [
            {
                "url": "https://api.github.com/gists/fa4ad4071fcd10df7700882d8bc0ed4f/comments/2622483",
                "id": 2622483,
                "node_id": "MDExOkdpc3RDb21tZW50ZmE0YWQ0MDcxZmNkMTBkZjc3MDA4ODJkOGJjMGVkNGY6MjYyMjQ4Mw==",
                "user": {
                    "login": "matheuspavin",
                    "id": 13410215,
                    "node_id": "MDQ6VXNlcjEzNDEwMjE1",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/13410215?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/matheuspavin",
                    "html_url": "https://github.com/matheuspavin",
                    "followers_url": "https://api.github.com/users/matheuspavin/followers",
                    "following_url": "https://api.github.com/users/matheuspavin/following{/other_user}",
                    "gists_url": "https://api.github.com/users/matheuspavin/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/matheuspavin/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/matheuspavin/subscriptions",
                    "organizations_url": "https://api.github.com/users/matheuspavin/orgs",
                    "repos_url": "https://api.github.com/users/matheuspavin/repos",
                    "events_url": "https://api.github.com/users/matheuspavin/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/matheuspavin/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "author_association": "OWNER",
                "created_at": "2018-06-18T01:56:18Z",
                "updated_at": "2018-06-18T01:56:18Z",
                "body": "Teste"
            },
            {
                "url": "https://api.github.com/gists/fa4ad4071fcd10df7700882d8bc0ed4f/comments/2622484",
                "id": 2622484,
                "node_id": "MDExOkdpc3RDb21tZW50ZmE0YWQ0MDcxZmNkMTBkZjc3MDA4ODJkOGJjMGVkNGY6MjYyMjQ4NA==",
                "user": {
                    "login": "matheuspavin",
                    "id": 13410215,
                    "node_id": "MDQ6VXNlcjEzNDEwMjE1",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/13410215?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/matheuspavin",
                    "html_url": "https://github.com/matheuspavin",
                    "followers_url": "https://api.github.com/users/matheuspavin/followers",
                    "following_url": "https://api.github.com/users/matheuspavin/following{/other_user}",
                    "gists_url": "https://api.github.com/users/matheuspavin/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/matheuspavin/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/matheuspavin/subscriptions",
                    "organizations_url": "https://api.github.com/users/matheuspavin/orgs",
                    "repos_url": "https://api.github.com/users/matheuspavin/repos",
                    "events_url": "https://api.github.com/users/matheuspavin/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/matheuspavin/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "author_association": "OWNER",
                "created_at": "2018-06-18T01:56:22Z",
                "updated_at": "2018-06-18T01:56:22Z",
                "body": "Teste 2"
            },
            {
                "url": "https://api.github.com/gists/fa4ad4071fcd10df7700882d8bc0ed4f/comments/2622485",
                "id": 2622485,
                "node_id": "MDExOkdpc3RDb21tZW50ZmE0YWQ0MDcxZmNkMTBkZjc3MDA4ODJkOGJjMGVkNGY6MjYyMjQ4NQ==",
                "user": {
                    "login": "matheuspavin",
                    "id": 13410215,
                    "node_id": "MDQ6VXNlcjEzNDEwMjE1",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/13410215?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/matheuspavin",
                    "html_url": "https://github.com/matheuspavin",
                    "followers_url": "https://api.github.com/users/matheuspavin/followers",
                    "following_url": "https://api.github.com/users/matheuspavin/following{/other_user}",
                    "gists_url": "https://api.github.com/users/matheuspavin/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/matheuspavin/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/matheuspavin/subscriptions",
                    "organizations_url": "https://api.github.com/users/matheuspavin/orgs",
                    "repos_url": "https://api.github.com/users/matheuspavin/repos",
                    "events_url": "https://api.github.com/users/matheuspavin/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/matheuspavin/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "author_association": "OWNER",
                "created_at": "2018-06-18T01:56:26Z",
                "updated_at": "2018-06-18T01:56:26Z",
                "body": "Teste 3"
            }
        ]
    }
};

const createGist = function (gist, user) {
    if (user.username === 'test' && user.password === 'password' && gist.body.description === 'Description of the gist') {
        return {
            "url": "https://api.github.com/gists/f0cca92601945b96ec8ffc5e23f2829c",
            "forks_url": "https://api.github.com/gists/f0cca92601945b96ec8ffc5e23f2829c/forks",
            "commits_url": "https://api.github.com/gists/f0cca92601945b96ec8ffc5e23f2829c/commits",
            "id": "f0cca92601945b96ec8ffc5e23f2829c",
            "node_id": "MDQ6R2lzdGYwY2NhOTI2MDE5NDViOTZlYzhmZmM1ZTIzZjI4Mjlj",
            "git_pull_url": "https://gist.github.com/f0cca92601945b96ec8ffc5e23f2829c.git",
            "git_push_url": "https://gist.github.com/f0cca92601945b96ec8ffc5e23f2829c.git",
            "html_url": "https://gist.github.com/f0cca92601945b96ec8ffc5e23f2829c",
            "files": {
                "Name of the gist": {
                    "filename": "Name of the gist",
                    "type": "text/plain",
                    "language": null,
                    "raw_url": "https://gist.githubusercontent.com/matheuspavin/f0cca92601945b96ec8ffc5e23f2829c/raw/5eb7f730313bda68670106c61a02e908150c8ee0/Name%20of%20the%20gist",
                    "size": 19,
                    "truncated": false,
                    "content": "Content of the gist"
                }
            },
            "public": true,
            "created_at": "2018-06-18T18:52:25Z",
            "updated_at": "2018-06-18T18:52:25Z",
            "description": "Descrição do gist",
            "comments": 0,
            "user": null,
            "comments_url": "https://api.github.com/gists/f0cca92601945b96ec8ffc5e23f2829c/comments",
            "owner": {
                "login": "matheuspavin",
                "id": 13410215,
                "node_id": "MDQ6VXNlcjEzNDEwMjE1",
                "avatar_url": "https://avatars3.githubusercontent.com/u/13410215?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/matheuspavin",
                "html_url": "https://github.com/matheuspavin",
                "followers_url": "https://api.github.com/users/matheuspavin/followers",
                "following_url": "https://api.github.com/users/matheuspavin/following{/other_user}",
                "gists_url": "https://api.github.com/users/matheuspavin/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/matheuspavin/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/matheuspavin/subscriptions",
                "organizations_url": "https://api.github.com/users/matheuspavin/orgs",
                "repos_url": "https://api.github.com/users/matheuspavin/repos",
                "events_url": "https://api.github.com/users/matheuspavin/events{/privacy}",
                "received_events_url": "https://api.github.com/users/matheuspavin/received_events",
                "type": "User",
                "site_admin": false
            },
            "forks": [],
            "history": [
                {
                    "user": {
                        "login": "matheuspavin",
                        "id": 13410215,
                        "node_id": "MDQ6VXNlcjEzNDEwMjE1",
                        "avatar_url": "https://avatars3.githubusercontent.com/u/13410215?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/matheuspavin",
                        "html_url": "https://github.com/matheuspavin",
                        "followers_url": "https://api.github.com/users/matheuspavin/followers",
                        "following_url": "https://api.github.com/users/matheuspavin/following{/other_user}",
                        "gists_url": "https://api.github.com/users/matheuspavin/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/matheuspavin/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/matheuspavin/subscriptions",
                        "organizations_url": "https://api.github.com/users/matheuspavin/orgs",
                        "repos_url": "https://api.github.com/users/matheuspavin/repos",
                        "events_url": "https://api.github.com/users/matheuspavin/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/matheuspavin/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "version": "942460979b4c57f4a8cf783a13c0dadef7ed6f0f",
                    "committed_at": "2018-06-18T18:52:25Z",
                    "change_status": {
                        "total": 1,
                        "additions": 1,
                        "deletions": 0
                    },
                    "url": "https://api.github.com/gists/f0cca92601945b96ec8ffc5e23f2829c/942460979b4c57f4a8cf783a13c0dadef7ed6f0f"
                }
            ],
            "truncated": false
        }
    }
};

module.exports = {
    gistComments,
    createGist
}