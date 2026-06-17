# `dataGoogleBackupDrDataSourceReferences` Submodule <a name="`dataGoogleBackupDrDataSourceReferences` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSourceReferences <a name="DataGoogleBackupDrDataSourceReferences" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references google_backup_dr_data_source_references}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences(
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
  id: str = None,
  project: str = None,
  resource_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.location">location</a></code> | <code>str</code> | The location to list the data source references from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#id DataGoogleBackupDrDataSourceReferences#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.location"></a>

- *Type:* str

The location to list the data source references from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#location DataGoogleBackupDrDataSourceReferences#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#id DataGoogleBackupDrDataSourceReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#project DataGoogleBackupDrDataSourceReferences#project}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.resourceType"></a>

- *Type:* str

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#resource_type DataGoogleBackupDrDataSourceReferences#resource_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSourceReferences resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isConstruct"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSourceReferences resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBackupDrDataSourceReferences to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBackupDrDataSourceReferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSourceReferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dataSourceReferences">data_source_references</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList">DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_source_references`<sup>Required</sup> <a name="data_source_references" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dataSourceReferences"></a>

```python
data_source_references: DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList">DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourceReferencesConfig <a name="DataGoogleBackupDrDataSourceReferencesConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  id: str = None,
  project: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.location">location</a></code> | <code>str</code> | The location to list the data source references from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#id DataGoogleBackupDrDataSourceReferences#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location to list the data source references from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#location DataGoogleBackupDrDataSourceReferences#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#id DataGoogleBackupDrDataSourceReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#project DataGoogleBackupDrDataSourceReferences#project}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#resource_type DataGoogleBackupDrDataSourceReferences#resource_type}

---

### DataGoogleBackupDrDataSourceReferencesDataSourceReferences <a name="DataGoogleBackupDrDataSourceReferencesDataSourceReferences" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences.Initializer"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList <a name="DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference <a name="DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_backup_dr_data_source_references

dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupConfigState">backup_config_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupCount">backup_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.gcpResourceName">gcp_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastBackupState">last_backup_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastSuccessfulBackupTime">last_successful_backup_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences">DataGoogleBackupDrDataSourceReferencesDataSourceReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_config_state`<sup>Required</sup> <a name="backup_config_state" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupConfigState"></a>

```python
backup_config_state: str
```

- *Type:* str

---

##### `backup_count`<sup>Required</sup> <a name="backup_count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupCount"></a>

```python
backup_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `gcp_resource_name`<sup>Required</sup> <a name="gcp_resource_name" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.gcpResourceName"></a>

```python
gcp_resource_name: str
```

- *Type:* str

---

##### `last_backup_state`<sup>Required</sup> <a name="last_backup_state" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastBackupState"></a>

```python
last_backup_state: str
```

- *Type:* str

---

##### `last_successful_backup_time`<sup>Required</sup> <a name="last_successful_backup_time" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastSuccessfulBackupTime"></a>

```python
last_successful_backup_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceReferencesDataSourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences">DataGoogleBackupDrDataSourceReferencesDataSourceReferences</a>

---



