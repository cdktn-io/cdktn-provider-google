# `secureSourceManagerHook` Submodule <a name="`secureSourceManagerHook` Submodule" id="@cdktn/provider-google.secureSourceManagerHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerHook <a name="SecureSourceManagerHook" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook google_secure_source_manager_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hook_id: str,
  location: str,
  repository_id: str,
  target_uri: str,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  events: typing.List[str] = None,
  id: str = None,
  project: str = None,
  push_option: SecureSourceManagerHookPushOption = None,
  sensitive_query_string: str = None,
  timeouts: SecureSourceManagerHookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.hookId">hook_id</a></code> | <code>str</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.targetUri">target_uri</a></code> | <code>str</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.pushOption">push_option</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.sensitiveQueryString">sensitive_query_string</a></code> | <code>str</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.hookId"></a>

- *Type:* str

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#hook_id SecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.location"></a>

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#location SecureSourceManagerHook#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.repositoryId"></a>

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#repository_id SecureSourceManagerHook#repository_id}

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.targetUri"></a>

- *Type:* str

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#target_uri SecureSourceManagerHook#target_uri}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#deletion_policy SecureSourceManagerHook#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#disabled SecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#events SecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}.

---

##### `push_option`<sup>Optional</sup> <a name="push_option" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.pushOption"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#push_option SecureSourceManagerHook#push_option}

---

##### `sensitive_query_string`<sup>Optional</sup> <a name="sensitive_query_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.sensitiveQueryString"></a>

- *Type:* str

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#sensitive_query_string SecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#timeouts SecureSourceManagerHook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putPushOption">put_push_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetEvents">reset_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetPushOption">reset_push_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetSensitiveQueryString">reset_sensitive_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_push_option` <a name="put_push_option" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putPushOption"></a>

```python
def put_push_option(
  branch_filter: str = None
) -> None
```

###### `branch_filter`<sup>Optional</sup> <a name="branch_filter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putPushOption.parameter.branchFilter"></a>

- *Type:* str

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#branch_filter SecureSourceManagerHook#branch_filter}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#create SecureSourceManagerHook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#delete SecureSourceManagerHook#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#update SecureSourceManagerHook#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_events` <a name="reset_events" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetEvents"></a>

```python
def reset_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_push_option` <a name="reset_push_option" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetPushOption"></a>

```python
def reset_push_option() -> None
```

##### `reset_sensitive_query_string` <a name="reset_sensitive_query_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetSensitiveQueryString"></a>

```python
def reset_sensitive_query_string() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecureSourceManagerHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isConstruct"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecureSourceManagerHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecureSourceManagerHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecureSourceManagerHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOption">push_option</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference">SecureSourceManagerHookPushOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference">SecureSourceManagerHookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookIdInput">hook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOptionInput">push_option_input</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryStringInput">sensitive_query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUriInput">target_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookId">hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryString">sensitive_query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUri">target_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `push_option`<sup>Required</sup> <a name="push_option" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOption"></a>

```python
push_option: SecureSourceManagerHookPushOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference">SecureSourceManagerHookPushOptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeouts"></a>

```python
timeouts: SecureSourceManagerHookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference">SecureSourceManagerHookTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hook_id_input`<sup>Optional</sup> <a name="hook_id_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookIdInput"></a>

```python
hook_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_option_input`<sup>Optional</sup> <a name="push_option_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.pushOptionInput"></a>

```python
push_option_input: SecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `sensitive_query_string_input`<sup>Optional</sup> <a name="sensitive_query_string_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryStringInput"></a>

```python
sensitive_query_string_input: str
```

- *Type:* str

---

##### `target_uri_input`<sup>Optional</sup> <a name="target_uri_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUriInput"></a>

```python
target_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SecureSourceManagerHookTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.hookId"></a>

```python
hook_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `sensitive_query_string`<sup>Required</sup> <a name="sensitive_query_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.sensitiveQueryString"></a>

```python
sensitive_query_string: str
```

- *Type:* str

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerHookConfig <a name="SecureSourceManagerHookConfig" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.Initializer"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hook_id: str,
  location: str,
  repository_id: str,
  target_uri: str,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  events: typing.List[str] = None,
  id: str = None,
  project: str = None,
  push_option: SecureSourceManagerHookPushOption = None,
  sensitive_query_string: str = None,
  timeouts: SecureSourceManagerHookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.hookId">hook_id</a></code> | <code>str</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.targetUri">target_uri</a></code> | <code>str</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.events">events</a></code> | <code>typing.List[str]</code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.pushOption">push_option</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.sensitiveQueryString">sensitive_query_string</a></code> | <code>str</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.hookId"></a>

```python
hook_id: str
```

- *Type:* str

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#hook_id SecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#location SecureSourceManagerHook#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#repository_id SecureSourceManagerHook#repository_id}

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#target_uri SecureSourceManagerHook#target_uri}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#deletion_policy SecureSourceManagerHook#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#disabled SecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#events SecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}.

---

##### `push_option`<sup>Optional</sup> <a name="push_option" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.pushOption"></a>

```python
push_option: SecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#push_option SecureSourceManagerHook#push_option}

---

##### `sensitive_query_string`<sup>Optional</sup> <a name="sensitive_query_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.sensitiveQueryString"></a>

```python
sensitive_query_string: str
```

- *Type:* str

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#sensitive_query_string SecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookConfig.property.timeouts"></a>

```python
timeouts: SecureSourceManagerHookTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#timeouts SecureSourceManagerHook#timeouts}

---

### SecureSourceManagerHookPushOption <a name="SecureSourceManagerHookPushOption" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption.Initializer"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHookPushOption(
  branch_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption.property.branchFilter">branch_filter</a></code> | <code>str</code> | Trigger hook for matching branches only. |

---

##### `branch_filter`<sup>Optional</sup> <a name="branch_filter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption.property.branchFilter"></a>

```python
branch_filter: str
```

- *Type:* str

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#branch_filter SecureSourceManagerHook#branch_filter}

---

### SecureSourceManagerHookTimeouts <a name="SecureSourceManagerHookTimeouts" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.Initializer"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHookTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#create SecureSourceManagerHook#create}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#delete SecureSourceManagerHook#delete}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#update SecureSourceManagerHook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#create SecureSourceManagerHook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#delete SecureSourceManagerHook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_hook#update SecureSourceManagerHook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerHookPushOptionOutputReference <a name="SecureSourceManagerHookPushOptionOutputReference" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resetBranchFilter">reset_branch_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_filter` <a name="reset_branch_filter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.resetBranchFilter"></a>

```python
def reset_branch_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput">branch_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilter">branch_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_filter_input`<sup>Optional</sup> <a name="branch_filter_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput"></a>

```python
branch_filter_input: str
```

- *Type:* str

---

##### `branch_filter`<sup>Required</sup> <a name="branch_filter" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.branchFilter"></a>

```python
branch_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOptionOutputReference.property.internalValue"></a>

```python
internal_value: SecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookPushOption">SecureSourceManagerHookPushOption</a>

---


### SecureSourceManagerHookTimeoutsOutputReference <a name="SecureSourceManagerHookTimeoutsOutputReference" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import secure_source_manager_hook

secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecureSourceManagerHookTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secureSourceManagerHook.SecureSourceManagerHookTimeouts">SecureSourceManagerHookTimeouts</a>

---



