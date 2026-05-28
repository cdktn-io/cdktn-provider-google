# `migrationCenterReportConfig` Submodule <a name="`migrationCenterReportConfig` Submodule" id="@cdktn/provider-google.migrationCenterReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterReportConfig <a name="MigrationCenterReportConfig" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config google_migration_center_report_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_preferenceset_assignments: IResolvable | typing.List[MigrationCenterReportConfigGroupPreferencesetAssignments],
  location: str,
  report_config_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: MigrationCenterReportConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.groupPreferencesetAssignments">group_preferenceset_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | group_preferenceset_assignments block. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.reportConfigId">report_config_id</a></code> | <code>str</code> | User specified ID for the report config. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#id MigrationCenterReportConfig#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#project MigrationCenterReportConfig#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_preferenceset_assignments`<sup>Required</sup> <a name="group_preferenceset_assignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.groupPreferencesetAssignments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]

group_preferenceset_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#group_preferenceset_assignments MigrationCenterReportConfig#group_preferenceset_assignments}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#location MigrationCenterReportConfig#location}

---

##### `report_config_id`<sup>Required</sup> <a name="report_config_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.reportConfigId"></a>

- *Type:* str

User specified ID for the report config.

It will become the last component
of the report config name. The ID must be unique within the project, must
conform with RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. The ID must match the regular expression:
[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#report_config_id MigrationCenterReportConfig#report_config_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#deletion_policy MigrationCenterReportConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.description"></a>

- *Type:* str

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#description MigrationCenterReportConfig#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#display_name MigrationCenterReportConfig#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#id MigrationCenterReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#project MigrationCenterReportConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#timeouts MigrationCenterReportConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putGroupPreferencesetAssignments">put_group_preferenceset_assignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_group_preferenceset_assignments` <a name="put_group_preferenceset_assignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putGroupPreferencesetAssignments"></a>

```python
def put_group_preferenceset_assignments(
  value: IResolvable | typing.List[MigrationCenterReportConfigGroupPreferencesetAssignments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putGroupPreferencesetAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#create MigrationCenterReportConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#delete MigrationCenterReportConfig#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MigrationCenterReportConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MigrationCenterReportConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MigrationCenterReportConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MigrationCenterReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignments">group_preferenceset_assignments</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList">MigrationCenterReportConfigGroupPreferencesetAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference">MigrationCenterReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput">group_preferenceset_assignments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigIdInput">report_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigId">report_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `group_preferenceset_assignments`<sup>Required</sup> <a name="group_preferenceset_assignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignments"></a>

```python
group_preferenceset_assignments: MigrationCenterReportConfigGroupPreferencesetAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList">MigrationCenterReportConfigGroupPreferencesetAssignmentsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeouts"></a>

```python
timeouts: MigrationCenterReportConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference">MigrationCenterReportConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `group_preferenceset_assignments_input`<sup>Optional</sup> <a name="group_preferenceset_assignments_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput"></a>

```python
group_preferenceset_assignments_input: IResolvable | typing.List[MigrationCenterReportConfigGroupPreferencesetAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `report_config_id_input`<sup>Optional</sup> <a name="report_config_id_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigIdInput"></a>

```python
report_config_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MigrationCenterReportConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `report_config_id`<sup>Required</sup> <a name="report_config_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigId"></a>

```python
report_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterReportConfigConfig <a name="MigrationCenterReportConfigConfig" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_preferenceset_assignments: IResolvable | typing.List[MigrationCenterReportConfigGroupPreferencesetAssignments],
  location: str,
  report_config_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: MigrationCenterReportConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.groupPreferencesetAssignments">group_preferenceset_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | group_preferenceset_assignments block. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.reportConfigId">report_config_id</a></code> | <code>str</code> | User specified ID for the report config. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.description">description</a></code> | <code>str</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#id MigrationCenterReportConfig#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#project MigrationCenterReportConfig#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_preferenceset_assignments`<sup>Required</sup> <a name="group_preferenceset_assignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.groupPreferencesetAssignments"></a>

```python
group_preferenceset_assignments: IResolvable | typing.List[MigrationCenterReportConfigGroupPreferencesetAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]

group_preferenceset_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#group_preferenceset_assignments MigrationCenterReportConfig#group_preferenceset_assignments}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#location MigrationCenterReportConfig#location}

---

##### `report_config_id`<sup>Required</sup> <a name="report_config_id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.reportConfigId"></a>

```python
report_config_id: str
```

- *Type:* str

User specified ID for the report config.

It will become the last component
of the report config name. The ID must be unique within the project, must
conform with RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. The ID must match the regular expression:
[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#report_config_id MigrationCenterReportConfig#report_config_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#deletion_policy MigrationCenterReportConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#description MigrationCenterReportConfig#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#display_name MigrationCenterReportConfig#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#id MigrationCenterReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#project MigrationCenterReportConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.timeouts"></a>

```python
timeouts: MigrationCenterReportConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#timeouts MigrationCenterReportConfig#timeouts}

---

### MigrationCenterReportConfigGroupPreferencesetAssignments <a name="MigrationCenterReportConfigGroupPreferencesetAssignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments(
  group: str,
  preference_set: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.group">group</a></code> | <code>str</code> | Name of the group. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet">preference_set</a></code> | <code>str</code> | Name of the Preference Set. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.group"></a>

```python
group: str
```

- *Type:* str

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#group MigrationCenterReportConfig#group}

---

##### `preference_set`<sup>Required</sup> <a name="preference_set" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet"></a>

```python
preference_set: str
```

- *Type:* str

Name of the Preference Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#preference_set MigrationCenterReportConfig#preference_set}

---

### MigrationCenterReportConfigTimeouts <a name="MigrationCenterReportConfigTimeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#create MigrationCenterReportConfig#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#delete MigrationCenterReportConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#create MigrationCenterReportConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#delete MigrationCenterReportConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterReportConfigGroupPreferencesetAssignmentsList <a name="MigrationCenterReportConfigGroupPreferencesetAssignmentsList" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MigrationCenterReportConfigGroupPreferencesetAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>]

---


### MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference <a name="MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput">preference_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet">preference_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `preference_set_input`<sup>Optional</sup> <a name="preference_set_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput"></a>

```python
preference_set_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `preference_set`<sup>Required</sup> <a name="preference_set" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet"></a>

```python
preference_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MigrationCenterReportConfigGroupPreferencesetAssignments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>

---


### MigrationCenterReportConfigTimeoutsOutputReference <a name="MigrationCenterReportConfigTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_report_config

migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MigrationCenterReportConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

---



