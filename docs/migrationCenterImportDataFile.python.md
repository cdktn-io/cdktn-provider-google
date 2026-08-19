# `migrationCenterImportDataFile` Submodule <a name="`migrationCenterImportDataFile` Submodule" id="@cdktn/provider-google.migrationCenterImportDataFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterImportDataFile <a name="MigrationCenterImportDataFile" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file google_migration_center_import_data_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  import_data_file_id: str,
  import_job: str,
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: MigrationCenterImportDataFileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.format">format</a></code> | <code>str</code> | Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.importDataFileId">import_data_file_id</a></code> | <code>str</code> | The ID of the new data file. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.importJob">import_job</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.format"></a>

- *Type:* str

Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#format MigrationCenterImportDataFile#format}

---

##### `import_data_file_id`<sup>Required</sup> <a name="import_data_file_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.importDataFileId"></a>

- *Type:* str

The ID of the new data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#import_data_file_id MigrationCenterImportDataFile#import_data_file_id}

---

##### `import_job`<sup>Required</sup> <a name="import_job" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.importJob"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#import_job MigrationCenterImportDataFile#import_job}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#location MigrationCenterImportDataFile#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#deletion_policy MigrationCenterImportDataFile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#display_name MigrationCenterImportDataFile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#timeouts MigrationCenterImportDataFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MigrationCenterImportDataFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MigrationCenterImportDataFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterImportDataFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference">MigrationCenterImportDataFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.uploadFileInfo">upload_file_info</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList">MigrationCenterImportDataFileUploadFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileIdInput">import_data_file_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJobInput">import_job_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileId">import_data_file_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJob">import_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeouts"></a>

```python
timeouts: MigrationCenterImportDataFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference">MigrationCenterImportDataFileTimeoutsOutputReference</a>

---

##### `upload_file_info`<sup>Required</sup> <a name="upload_file_info" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.uploadFileInfo"></a>

```python
upload_file_info: MigrationCenterImportDataFileUploadFileInfoList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList">MigrationCenterImportDataFileUploadFileInfoList</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_data_file_id_input`<sup>Optional</sup> <a name="import_data_file_id_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileIdInput"></a>

```python
import_data_file_id_input: str
```

- *Type:* str

---

##### `import_job_input`<sup>Optional</sup> <a name="import_job_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJobInput"></a>

```python
import_job_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MigrationCenterImportDataFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_data_file_id`<sup>Required</sup> <a name="import_data_file_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileId"></a>

```python
import_data_file_id: str
```

- *Type:* str

---

##### `import_job`<sup>Required</sup> <a name="import_job" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJob"></a>

```python
import_job: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterImportDataFileConfig <a name="MigrationCenterImportDataFileConfig" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  import_data_file_id: str,
  import_job: str,
  location: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: MigrationCenterImportDataFileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.format">format</a></code> | <code>str</code> | Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importDataFileId">import_data_file_id</a></code> | <code>str</code> | The ID of the new data file. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importJob">import_job</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#format MigrationCenterImportDataFile#format}

---

##### `import_data_file_id`<sup>Required</sup> <a name="import_data_file_id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importDataFileId"></a>

```python
import_data_file_id: str
```

- *Type:* str

The ID of the new data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#import_data_file_id MigrationCenterImportDataFile#import_data_file_id}

---

##### `import_job`<sup>Required</sup> <a name="import_job" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importJob"></a>

```python
import_job: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#import_job MigrationCenterImportDataFile#import_job}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#location MigrationCenterImportDataFile#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#deletion_policy MigrationCenterImportDataFile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#display_name MigrationCenterImportDataFile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.timeouts"></a>

```python
timeouts: MigrationCenterImportDataFileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#timeouts MigrationCenterImportDataFile#timeouts}

---

### MigrationCenterImportDataFileTimeouts <a name="MigrationCenterImportDataFileTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}.

---

### MigrationCenterImportDataFileUploadFileInfo <a name="MigrationCenterImportDataFileUploadFileInfo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterImportDataFileTimeoutsOutputReference <a name="MigrationCenterImportDataFileTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MigrationCenterImportDataFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---


### MigrationCenterImportDataFileUploadFileInfoList <a name="MigrationCenterImportDataFileUploadFileInfoList" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MigrationCenterImportDataFileUploadFileInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MigrationCenterImportDataFileUploadFileInfoOutputReference <a name="MigrationCenterImportDataFileUploadFileInfoOutputReference" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_import_data_file

migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers">headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri">signed_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime">uri_expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo">MigrationCenterImportDataFileUploadFileInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `signed_uri`<sup>Required</sup> <a name="signed_uri" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri"></a>

```python
signed_uri: str
```

- *Type:* str

---

##### `uri_expiration_time`<sup>Required</sup> <a name="uri_expiration_time" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime"></a>

```python
uri_expiration_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue"></a>

```python
internal_value: MigrationCenterImportDataFileUploadFileInfo
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo">MigrationCenterImportDataFileUploadFileInfo</a>

---



