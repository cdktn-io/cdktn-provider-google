# `migrationCenterSource` Submodule <a name="`migrationCenterSource` Submodule" id="@cdktn/provider-google.migrationCenterSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterSource <a name="MigrationCenterSource" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source google_migration_center_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  source_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  managed: bool | IResolvable = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: MigrationCenterSourceTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.sourceId">source_id</a></code> | <code>str</code> | User specified ID for the source. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#id MigrationCenterSource#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.managed">managed</a></code> | <code>bool \| cdktn.IResolvable</code> | If 'true', the source is managed by other service(s). |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The information confidence of the source. The higher the value, the higher the confidence. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#project MigrationCenterSource#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.type">type</a></code> | <code>str</code> | Data source type. Possible values: SOURCE_TYPE_UNKNOWN SOURCE_TYPE_UPLOAD SOURCE_TYPE_GUEST_OS_SCAN SOURCE_TYPE_INVENTORY_SCAN SOURCE_TYPE_CUSTOM SOURCE_TYPE_DISCOVERY_CLIENT. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#location MigrationCenterSource#location}

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.sourceId"></a>

- *Type:* str

User specified ID for the source.

It will become the last component of the
source name. The ID must be unique within the project, must conform with
RFC-1034, is restricted to lower-cased letters, and has a maximum
length of 63 characters. The ID must match the
regular expression: '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#source_id MigrationCenterSource#source_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#deletion_policy MigrationCenterSource#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.description"></a>

- *Type:* str

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#description MigrationCenterSource#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#display_name MigrationCenterSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#id MigrationCenterSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.managed"></a>

- *Type:* bool | cdktn.IResolvable

If 'true', the source is managed by other service(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#managed MigrationCenterSource#managed}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The information confidence of the source. The higher the value, the higher the confidence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#priority MigrationCenterSource#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#project MigrationCenterSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#timeouts MigrationCenterSource#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.Initializer.parameter.type"></a>

- *Type:* str

Data source type. Possible values: SOURCE_TYPE_UNKNOWN SOURCE_TYPE_UPLOAD SOURCE_TYPE_GUEST_OS_SCAN SOURCE_TYPE_INVENTORY_SCAN SOURCE_TYPE_CUSTOM SOURCE_TYPE_DISCOVERY_CLIENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#type MigrationCenterSource#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#create MigrationCenterSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#delete MigrationCenterSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#update MigrationCenterSource#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed` <a name="reset_managed" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MigrationCenterSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isConstruct"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isTerraformElement"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isTerraformResource"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.generateConfigForImport"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MigrationCenterSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MigrationCenterSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MigrationCenterSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.errorFrameCount">error_frame_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.pendingFrameCount">pending_frame_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference">MigrationCenterSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.managedInput">managed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.managed">managed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `error_frame_count`<sup>Required</sup> <a name="error_frame_count" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.errorFrameCount"></a>

```python
error_frame_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pending_frame_count`<sup>Required</sup> <a name="pending_frame_count" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.pendingFrameCount"></a>

```python
pending_frame_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.timeouts"></a>

```python
timeouts: MigrationCenterSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference">MigrationCenterSourceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.managedInput"></a>

```python
managed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MigrationCenterSourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.managed"></a>

```python
managed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterSourceConfig <a name="MigrationCenterSourceConfig" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.Initializer"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  source_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  managed: bool | IResolvable = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  timeouts: MigrationCenterSourceTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.sourceId">source_id</a></code> | <code>str</code> | User specified ID for the source. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.description">description</a></code> | <code>str</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#id MigrationCenterSource#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.managed">managed</a></code> | <code>bool \| cdktn.IResolvable</code> | If 'true', the source is managed by other service(s). |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The information confidence of the source. The higher the value, the higher the confidence. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#project MigrationCenterSource#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.type">type</a></code> | <code>str</code> | Data source type. Possible values: SOURCE_TYPE_UNKNOWN SOURCE_TYPE_UPLOAD SOURCE_TYPE_GUEST_OS_SCAN SOURCE_TYPE_INVENTORY_SCAN SOURCE_TYPE_CUSTOM SOURCE_TYPE_DISCOVERY_CLIENT. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#location MigrationCenterSource#location}

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

User specified ID for the source.

It will become the last component of the
source name. The ID must be unique within the project, must conform with
RFC-1034, is restricted to lower-cased letters, and has a maximum
length of 63 characters. The ID must match the
regular expression: '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#source_id MigrationCenterSource#source_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#deletion_policy MigrationCenterSource#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#description MigrationCenterSource#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#display_name MigrationCenterSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#id MigrationCenterSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.managed"></a>

```python
managed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If 'true', the source is managed by other service(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#managed MigrationCenterSource#managed}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The information confidence of the source. The higher the value, the higher the confidence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#priority MigrationCenterSource#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#project MigrationCenterSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.timeouts"></a>

```python
timeouts: MigrationCenterSourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#timeouts MigrationCenterSource#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Data source type. Possible values: SOURCE_TYPE_UNKNOWN SOURCE_TYPE_UPLOAD SOURCE_TYPE_GUEST_OS_SCAN SOURCE_TYPE_INVENTORY_SCAN SOURCE_TYPE_CUSTOM SOURCE_TYPE_DISCOVERY_CLIENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#type MigrationCenterSource#type}

---

### MigrationCenterSourceTimeouts <a name="MigrationCenterSourceTimeouts" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.Initializer"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#create MigrationCenterSource#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#delete MigrationCenterSource#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#update MigrationCenterSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#create MigrationCenterSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#delete MigrationCenterSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_source#update MigrationCenterSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterSourceTimeoutsOutputReference <a name="MigrationCenterSourceTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_source

migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MigrationCenterSourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterSource.MigrationCenterSourceTimeouts">MigrationCenterSourceTimeouts</a>

---



