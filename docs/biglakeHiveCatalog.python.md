# `biglakeHiveCatalog` Submodule <a name="`biglakeHiveCatalog` Submodule" id="@cdktn/provider-google.biglakeHiveCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveCatalog <a name="BiglakeHiveCatalog" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog google_biglake_hive_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalog(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location_uri: str,
  name: str,
  primary_location: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: BiglakeHiveCatalogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.locationUri">location_uri</a></code> | <code>str</code> | Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Hive Catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.primaryLocation">primary_location</a></code> | <code>str</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Hive catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.locationUri"></a>

- *Type:* str

Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#location_uri BiglakeHiveCatalog#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.name"></a>

- *Type:* str

Name of the Hive Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#name BiglakeHiveCatalog#name}

---

##### `primary_location`<sup>Required</sup> <a name="primary_location" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.primaryLocation"></a>

- *Type:* str

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#primary_location BiglakeHiveCatalog#primary_location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#deletion_policy BiglakeHiveCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.description"></a>

- *Type:* str

Description of the Hive catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#description BiglakeHiveCatalog#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#timeouts BiglakeHiveCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#create BiglakeHiveCatalog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#delete BiglakeHiveCatalog#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#update BiglakeHiveCatalog#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BiglakeHiveCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isConstruct"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformElement"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformResource"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BiglakeHiveCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BiglakeHiveCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BiglakeHiveCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList">BiglakeHiveCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference">BiglakeHiveCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocationInput">primary_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocation">primary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.replicas"></a>

```python
replicas: BiglakeHiveCatalogReplicasList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList">BiglakeHiveCatalogReplicasList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeouts"></a>

```python
timeouts: BiglakeHiveCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference">BiglakeHiveCatalogTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_location_input`<sup>Optional</sup> <a name="primary_location_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocationInput"></a>

```python
primary_location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BiglakeHiveCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_location`<sup>Required</sup> <a name="primary_location" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocation"></a>

```python
primary_location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveCatalogConfig <a name="BiglakeHiveCatalogConfig" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location_uri: str,
  name: str,
  primary_location: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: BiglakeHiveCatalogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.locationUri">location_uri</a></code> | <code>str</code> | Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.name">name</a></code> | <code>str</code> | Name of the Hive Catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.primaryLocation">primary_location</a></code> | <code>str</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.description">description</a></code> | <code>str</code> | Description of the Hive catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#location_uri BiglakeHiveCatalog#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Hive Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#name BiglakeHiveCatalog#name}

---

##### `primary_location`<sup>Required</sup> <a name="primary_location" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.primaryLocation"></a>

```python
primary_location: str
```

- *Type:* str

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#primary_location BiglakeHiveCatalog#primary_location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#deletion_policy BiglakeHiveCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Hive catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#description BiglakeHiveCatalog#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.timeouts"></a>

```python
timeouts: BiglakeHiveCatalogTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#timeouts BiglakeHiveCatalog#timeouts}

---

### BiglakeHiveCatalogReplicas <a name="BiglakeHiveCatalogReplicas" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalogReplicas()
```


### BiglakeHiveCatalogTimeouts <a name="BiglakeHiveCatalogTimeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalogTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#create BiglakeHiveCatalog#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#delete BiglakeHiveCatalog#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#update BiglakeHiveCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#create BiglakeHiveCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#delete BiglakeHiveCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#update BiglakeHiveCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveCatalogReplicasList <a name="BiglakeHiveCatalogReplicasList" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalogReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BiglakeHiveCatalogReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BiglakeHiveCatalogReplicasOutputReference <a name="BiglakeHiveCatalogReplicasOutputReference" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas">BiglakeHiveCatalogReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeHiveCatalogReplicas
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas">BiglakeHiveCatalogReplicas</a>

---


### BiglakeHiveCatalogTimeoutsOutputReference <a name="BiglakeHiveCatalogTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import biglake_hive_catalog

biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BiglakeHiveCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

---



