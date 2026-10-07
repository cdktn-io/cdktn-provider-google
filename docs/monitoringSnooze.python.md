# `monitoringSnooze` Submodule <a name="`monitoringSnooze` Submodule" id="@cdktn/provider-google.monitoringSnooze"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSnooze <a name="MonitoringSnooze" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze google_monitoring_snooze}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnooze(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  criteria: MonitoringSnoozeCriteria,
  display_name: str,
  interval: MonitoringSnoozeInterval,
  id: str = None,
  project: str = None,
  timeouts: MonitoringSnoozeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#criteria MonitoringSnooze#criteria}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#display_name MonitoringSnooze#display_name}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.interval"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#interval MonitoringSnooze#interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#timeouts MonitoringSnooze#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval">put_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria"></a>

```python
def put_criteria(
  filter: str = None,
  policies: typing.List[str] = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria.parameter.filter"></a>

- *Type:* str

When you define a snooze, you can also define a filter for that snooze.

The filter is a string containing one or more key-value pairs. The string
uses the standard https://google.aip.dev/160 filter syntax. If you define
a filter for a snooze, then the snooze can only apply to one alert policy.
When the snooze is active, incidents won't be created when the incident
would have key-value pairs (labels) that match those specified by the
filter in the snooze.

Snooze filters support resource, metric, and metadata labels. If multiple
labels are used, then they must be connected with an AND operator. For
example, the following filter applies the snooze to incidents that have a
resource label with an instance ID of 1234567890, a metric label with an
instance name of test_group, a metadata user label with a key of foo and a
value of bar, and a metadata system label with a key of region and a value
of us-central1:

"filter": "resource.labels.instance_id="1234567890" AND metric.labels.instance_name="test_group" AND metadata.user_labels.foo="bar" AND metadata.system_labels.region="us-central1""

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#filter MonitoringSnooze#filter}

---

###### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria.parameter.policies"></a>

- *Type:* typing.List[str]

The specific AlertPolicy names for the alert that should be snoozed.

The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]
There is a limit of 16 policies per snooze. This limit is checked during
snooze creation. Exactly 1 alert policy is required if filter is specified
at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#policies MonitoringSnooze#policies}

---

##### `put_interval` <a name="put_interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval"></a>

```python
def put_interval(
  end_time: str,
  start_time: str = None
) -> None
```

###### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval.parameter.endTime"></a>

- *Type:* str

The end of the time interval.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#end_time MonitoringSnooze#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval.parameter.startTime"></a>

- *Type:* str

The beginning of the time interval.

The default value for the start time
is the end time. The start time must not be later than the end time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#start_time MonitoringSnooze#start_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnooze.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnooze.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnooze.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnooze.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitoringSnooze to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitoringSnooze that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MonitoringSnooze to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput">interval_input</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria"></a>

```python
criteria: MonitoringSnoozeCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval"></a>

```python
interval: MonitoringSnoozeIntervalOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts"></a>

```python
timeouts: MonitoringSnoozeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput"></a>

```python
criteria_input: MonitoringSnoozeCriteria
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput"></a>

```python
interval_input: MonitoringSnoozeInterval
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MonitoringSnoozeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSnoozeConfig <a name="MonitoringSnoozeConfig" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  criteria: MonitoringSnoozeCriteria,
  display_name: str,
  interval: MonitoringSnoozeInterval,
  id: str = None,
  project: str = None,
  timeouts: MonitoringSnoozeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria"></a>

```python
criteria: MonitoringSnoozeCriteria
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#criteria MonitoringSnooze#criteria}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#display_name MonitoringSnooze#display_name}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval"></a>

```python
interval: MonitoringSnoozeInterval
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#interval MonitoringSnooze#interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts"></a>

```python
timeouts: MonitoringSnoozeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#timeouts MonitoringSnooze#timeouts}

---

### MonitoringSnoozeCriteria <a name="MonitoringSnoozeCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeCriteria(
  filter: str = None,
  policies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter">filter</a></code> | <code>str</code> | When you define a snooze, you can also define a filter for that snooze. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies">policies</a></code> | <code>typing.List[str]</code> | The specific AlertPolicy names for the alert that should be snoozed. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter"></a>

```python
filter: str
```

- *Type:* str

When you define a snooze, you can also define a filter for that snooze.

The filter is a string containing one or more key-value pairs. The string
uses the standard https://google.aip.dev/160 filter syntax. If you define
a filter for a snooze, then the snooze can only apply to one alert policy.
When the snooze is active, incidents won't be created when the incident
would have key-value pairs (labels) that match those specified by the
filter in the snooze.

Snooze filters support resource, metric, and metadata labels. If multiple
labels are used, then they must be connected with an AND operator. For
example, the following filter applies the snooze to incidents that have a
resource label with an instance ID of 1234567890, a metric label with an
instance name of test_group, a metadata user label with a key of foo and a
value of bar, and a metadata system label with a key of region and a value
of us-central1:

"filter": "resource.labels.instance_id="1234567890" AND metric.labels.instance_name="test_group" AND metadata.user_labels.foo="bar" AND metadata.system_labels.region="us-central1""

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#filter MonitoringSnooze#filter}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

The specific AlertPolicy names for the alert that should be snoozed.

The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]
There is a limit of 16 policies per snooze. This limit is checked during
snooze creation. Exactly 1 alert policy is required if filter is specified
at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#policies MonitoringSnooze#policies}

---

### MonitoringSnoozeInterval <a name="MonitoringSnoozeInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeInterval(
  end_time: str,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime">end_time</a></code> | <code>str</code> | The end of the time interval. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime">start_time</a></code> | <code>str</code> | The beginning of the time interval. |

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The end of the time interval.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#end_time MonitoringSnooze#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The beginning of the time interval.

The default value for the start time
is the end time. The start time must not be later than the end time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#start_time MonitoringSnooze#start_time}

---

### MonitoringSnoozeTimeouts <a name="MonitoringSnoozeTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSnoozeCriteriaOutputReference <a name="MonitoringSnoozeCriteriaOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies">reset_policies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies"></a>

```python
def reset_policies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: MonitoringSnoozeCriteria
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---


### MonitoringSnoozeIntervalOutputReference <a name="MonitoringSnoozeIntervalOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue"></a>

```python
internal_value: MonitoringSnoozeInterval
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---


### MonitoringSnoozeTimeoutsOutputReference <a name="MonitoringSnoozeTimeoutsOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import monitoring_snooze

monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MonitoringSnoozeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---



