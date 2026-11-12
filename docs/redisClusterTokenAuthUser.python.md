# `redisClusterTokenAuthUser` Submodule <a name="`redisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google.redisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterTokenAuthUser <a name="RedisClusterTokenAuthUser" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster: str,
  user_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: RedisClusterTokenAuthUserTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.cluster"></a>

- *Type:* str

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.userId"></a>

- *Type:* str

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.region"></a>

- *Type:* str

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedisClusterTokenAuthUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts"></a>

```python
timeouts: RedisClusterTokenAuthUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | RedisClusterTokenAuthUserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterTokenAuthUserConfig <a name="RedisClusterTokenAuthUserConfig" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.Initializer"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster: str,
  user_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: RedisClusterTokenAuthUserTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster">cluster</a></code> | <code>str</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId">user_id</a></code> | <code>str</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region">region</a></code> | <code>str</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts"></a>

```python
timeouts: RedisClusterTokenAuthUserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

### RedisClusterTokenAuthUserTimeouts <a name="RedisClusterTokenAuthUserTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.Initializer"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterTokenAuthUserTimeoutsOutputReference <a name="RedisClusterTokenAuthUserTimeoutsOutputReference" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import redis_cluster_token_auth_user

redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedisClusterTokenAuthUserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---



