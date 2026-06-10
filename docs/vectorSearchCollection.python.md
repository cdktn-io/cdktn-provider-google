# `vectorSearchCollection` Submodule <a name="`vectorSearchCollection` Submodule" id="@cdktn/provider-google.vectorSearchCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchCollection <a name="VectorSearchCollection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection google_vector_search_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  location: str,
  data_schema: str = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  encryption_spec: VectorSearchCollectionEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: VectorSearchCollectionTimeouts = None,
  vector_schema: IResolvable | typing.List[VectorSearchCollectionVectorSchema] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dataSchema">data_schema</a></code> | <code>str</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.description">description</a></code> | <code>str</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.vectorSchema">vector_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]</code> | vector_schema block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.collectionId"></a>

- *Type:* str

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}

---

##### `data_schema`<sup>Optional</sup> <a name="data_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.dataSchema"></a>

- *Type:* str

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.description"></a>

- *Type:* str

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.displayName"></a>

- *Type:* str

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}

---

##### `vector_schema`<sup>Optional</sup> <a name="vector_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.vectorSchema"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema">put_vector_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema">reset_data_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema">reset_vector_schema</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  crypto_key_name: str
) -> None
```

###### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec.parameter.cryptoKeyName"></a>

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#crypto_key_name VectorSearchCollection#crypto_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}.

---

##### `put_vector_schema` <a name="put_vector_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema"></a>

```python
def put_vector_schema(
  value: IResolvable | typing.List[VectorSearchCollectionVectorSchema]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]

---

##### `reset_data_schema` <a name="reset_data_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema"></a>

```python
def reset_data_schema() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vector_schema` <a name="reset_vector_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema"></a>

```python
def reset_vector_schema() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VectorSearchCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VectorSearchCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema">vector_schema</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput">data_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput">vector_schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema">data_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec"></a>

```python
encryption_spec: VectorSearchCollectionEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts"></a>

```python
timeouts: VectorSearchCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vector_schema`<sup>Required</sup> <a name="vector_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema"></a>

```python
vector_schema: VectorSearchCollectionVectorSchemaList
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `data_schema_input`<sup>Optional</sup> <a name="data_schema_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput"></a>

```python
data_schema_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput"></a>

```python
encryption_spec_input: VectorSearchCollectionEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VectorSearchCollectionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `vector_schema_input`<sup>Optional</sup> <a name="vector_schema_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput"></a>

```python
vector_schema_input: IResolvable | typing.List[VectorSearchCollectionVectorSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data_schema`<sup>Required</sup> <a name="data_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema"></a>

```python
data_schema: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchCollectionConfig <a name="VectorSearchCollectionConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  location: str,
  data_schema: str = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  encryption_spec: VectorSearchCollectionEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: VectorSearchCollectionTimeouts = None,
  vector_schema: IResolvable | typing.List[VectorSearchCollectionVectorSchema] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId">collection_id</a></code> | <code>str</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema">data_schema</a></code> | <code>str</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description">description</a></code> | <code>str</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema">vector_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]</code> | vector_schema block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}

---

##### `data_schema`<sup>Optional</sup> <a name="data_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema"></a>

```python
data_schema: str
```

- *Type:* str

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec"></a>

```python
encryption_spec: VectorSearchCollectionEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts"></a>

```python
timeouts: VectorSearchCollectionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}

---

##### `vector_schema`<sup>Optional</sup> <a name="vector_schema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema"></a>

```python
vector_schema: IResolvable | typing.List[VectorSearchCollectionVectorSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}

---

### VectorSearchCollectionEncryptionSpec <a name="VectorSearchCollectionEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionEncryptionSpec(
  crypto_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#crypto_key_name VectorSearchCollection#crypto_key_name}

---

### VectorSearchCollectionTimeouts <a name="VectorSearchCollectionTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}.

---

### VectorSearchCollectionVectorSchema <a name="VectorSearchCollectionVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchema(
  field_name: str,
  dense_vector: VectorSearchCollectionVectorSchemaDenseVector = None,
  sparse_vector: VectorSearchCollectionVectorSchemaSparseVector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector">dense_vector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | dense_vector block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector">sparse_vector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | sparse_vector block. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}.

---

##### `dense_vector`<sup>Optional</sup> <a name="dense_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector"></a>

```python
dense_vector: VectorSearchCollectionVectorSchemaDenseVector
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

dense_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#dense_vector VectorSearchCollection#dense_vector}

---

##### `sparse_vector`<sup>Optional</sup> <a name="sparse_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector"></a>

```python
sparse_vector: VectorSearchCollectionVectorSchemaSparseVector
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

sparse_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#sparse_vector VectorSearchCollection#sparse_vector}

---

### VectorSearchCollectionVectorSchemaDenseVector <a name="VectorSearchCollectionVectorSchemaDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector(
  dimensions: typing.Union[int, float] = None,
  vertex_embedding_config: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions">dimensions</a></code> | <code>typing.Union[int, float]</code> | Dimensionality of the vector field. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig">vertex_embedding_config</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | vertex_embedding_config block. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions"></a>

```python
dimensions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#dimensions VectorSearchCollection#dimensions}

---

##### `vertex_embedding_config`<sup>Optional</sup> <a name="vertex_embedding_config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig"></a>

```python
vertex_embedding_config: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#vertex_embedding_config VectorSearchCollection#vertex_embedding_config}

---

### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig(
  model_id: str,
  task_type: str,
  text_template: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId">model_id</a></code> | <code>str</code> | Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType">task_type</a></code> | <code>str</code> | Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate">text_template</a></code> | <code>str</code> | Required: Text template for the input to the model. |

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#model_id VectorSearchCollection#model_id}

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#task_type VectorSearchCollection#task_type}

---

##### `text_template`<sup>Required</sup> <a name="text_template" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate"></a>

```python
text_template: str
```

- *Type:* str

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#text_template VectorSearchCollection#text_template}

---

### VectorSearchCollectionVectorSchemaSparseVector <a name="VectorSearchCollectionVectorSchemaSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector()
```


## Classes <a name="Classes" id="Classes"></a>

### VectorSearchCollectionEncryptionSpecOutputReference <a name="VectorSearchCollectionEncryptionSpecOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchCollectionEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---


### VectorSearchCollectionTimeoutsOutputReference <a name="VectorSearchCollectionTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VectorSearchCollectionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig">put_vertex_embedding_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig">reset_vertex_embedding_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vertex_embedding_config` <a name="put_vertex_embedding_config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig"></a>

```python
def put_vertex_embedding_config(
  model_id: str,
  task_type: str,
  text_template: str
) -> None
```

###### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.modelId"></a>

- *Type:* str

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#model_id VectorSearchCollection#model_id}

---

###### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.taskType"></a>

- *Type:* str

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#task_type VectorSearchCollection#task_type}

---

###### `text_template`<sup>Required</sup> <a name="text_template" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.textTemplate"></a>

- *Type:* str

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#text_template VectorSearchCollection#text_template}

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_vertex_embedding_config` <a name="reset_vertex_embedding_config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig"></a>

```python
def reset_vertex_embedding_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig">vertex_embedding_config</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput">vertex_embedding_config_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vertex_embedding_config`<sup>Required</sup> <a name="vertex_embedding_config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig"></a>

```python
vertex_embedding_config: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vertex_embedding_config_input`<sup>Optional</sup> <a name="vertex_embedding_config_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput"></a>

```python
vertex_embedding_config_input: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions"></a>

```python
dimensions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchCollectionVectorSchemaDenseVector
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput">text_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate">text_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `text_template_input`<sup>Optional</sup> <a name="text_template_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput"></a>

```python
text_template_input: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `text_template`<sup>Required</sup> <a name="text_template" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate"></a>

```python
text_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---


### VectorSearchCollectionVectorSchemaList <a name="VectorSearchCollectionVectorSchemaList" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VectorSearchCollectionVectorSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VectorSearchCollectionVectorSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>]

---


### VectorSearchCollectionVectorSchemaOutputReference <a name="VectorSearchCollectionVectorSchemaOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector">put_dense_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector">put_sparse_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector">reset_dense_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector">reset_sparse_vector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dense_vector` <a name="put_dense_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector"></a>

```python
def put_dense_vector(
  dimensions: typing.Union[int, float] = None,
  vertex_embedding_config: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.dimensions"></a>

- *Type:* typing.Union[int, float]

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#dimensions VectorSearchCollection#dimensions}

---

###### `vertex_embedding_config`<sup>Optional</sup> <a name="vertex_embedding_config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.vertexEmbeddingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/vector_search_collection#vertex_embedding_config VectorSearchCollection#vertex_embedding_config}

---

##### `put_sparse_vector` <a name="put_sparse_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector"></a>

```python
def put_sparse_vector() -> None
```

##### `reset_dense_vector` <a name="reset_dense_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector"></a>

```python
def reset_dense_vector() -> None
```

##### `reset_sparse_vector` <a name="reset_sparse_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector"></a>

```python
def reset_sparse_vector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector">dense_vector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector">sparse_vector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput">dense_vector_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput">sparse_vector_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dense_vector`<sup>Required</sup> <a name="dense_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector"></a>

```python
dense_vector: VectorSearchCollectionVectorSchemaDenseVectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a>

---

##### `sparse_vector`<sup>Required</sup> <a name="sparse_vector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector"></a>

```python
sparse_vector: VectorSearchCollectionVectorSchemaSparseVectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a>

---

##### `dense_vector_input`<sup>Optional</sup> <a name="dense_vector_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput"></a>

```python
dense_vector_input: VectorSearchCollectionVectorSchemaDenseVector
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `sparse_vector_input`<sup>Optional</sup> <a name="sparse_vector_input" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput"></a>

```python
sparse_vector_input: VectorSearchCollectionVectorSchemaSparseVector
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VectorSearchCollectionVectorSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>

---


### VectorSearchCollectionVectorSchemaSparseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaSparseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_collection

vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchCollectionVectorSchemaSparseVector
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---



