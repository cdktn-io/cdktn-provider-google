# `vectorSearchDataObject` Submodule <a name="`vectorSearchDataObject` Submodule" id="@cdktn/provider-google.vectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchDataObject <a name="VectorSearchDataObject" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObject(
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
  data_object_id: str,
  location: str,
  data: str = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  project: str = None,
  timeouts: VectorSearchDataObjectTimeouts = None,
  vectors: IResolvable | typing.List[VectorSearchDataObjectVectors] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dataObjectId">data_object_id</a></code> | <code>str</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.data">data</a></code> | <code>str</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.etag">etag</a></code> | <code>str</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.vectors">vectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]</code> | vectors block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.collectionId"></a>

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#collection_id VectorSearchDataObject#collection_id}

---

##### `data_object_id`<sup>Required</sup> <a name="data_object_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.dataObjectId"></a>

- *Type:* str

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data_object_id VectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#location VectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.data"></a>

- *Type:* str

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data VectorSearchDataObject#data}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#deletion_policy VectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.etag"></a>

- *Type:* str

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#etag VectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#timeouts VectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.Initializer.parameter.vectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#vectors VectorSearchDataObject#vectors}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors">put_vectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetVectors">reset_vectors</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}.

---

##### `put_vectors` <a name="put_vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors"></a>

```python
def put_vectors(
  value: IResolvable | typing.List[VectorSearchDataObjectVectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]

---

##### `reset_data` <a name="reset_data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vectors` <a name="reset_vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.resetVectors"></a>

```python
def reset_vectors() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VectorSearchDataObject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference">VectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectors">vectors</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList">VectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectIdInput">data_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectorsInput">vectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectId">data_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeouts"></a>

```python
timeouts: VectorSearchDataObjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference">VectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vectors`<sup>Required</sup> <a name="vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectors"></a>

```python
vectors: VectorSearchDataObjectVectorsList
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList">VectorSearchDataObjectVectorsList</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `data_object_id_input`<sup>Optional</sup> <a name="data_object_id_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectIdInput"></a>

```python
data_object_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VectorSearchDataObjectTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---

##### `vectors_input`<sup>Optional</sup> <a name="vectors_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.vectorsInput"></a>

```python
vectors_input: IResolvable | typing.List[VectorSearchDataObjectVectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `data_object_id`<sup>Required</sup> <a name="data_object_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.dataObjectId"></a>

```python
data_object_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchDataObjectConfig <a name="VectorSearchDataObjectConfig" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_object_id: str,
  location: str,
  data: str = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  project: str = None,
  timeouts: VectorSearchDataObjectTimeouts = None,
  vectors: IResolvable | typing.List[VectorSearchDataObjectVectors] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dataObjectId">data_object_id</a></code> | <code>str</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.data">data</a></code> | <code>str</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.etag">etag</a></code> | <code>str</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.vectors">vectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]</code> | vectors block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#collection_id VectorSearchDataObject#collection_id}

---

##### `data_object_id`<sup>Required</sup> <a name="data_object_id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.dataObjectId"></a>

```python
data_object_id: str
```

- *Type:* str

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data_object_id VectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#location VectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.data"></a>

```python
data: str
```

- *Type:* str

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#data VectorSearchDataObject#data}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#deletion_policy VectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#etag VectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#id VectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#project VectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.timeouts"></a>

```python
timeouts: VectorSearchDataObjectTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#timeouts VectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectConfig.property.vectors"></a>

```python
vectors: IResolvable | typing.List[VectorSearchDataObjectVectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#vectors VectorSearchDataObject#vectors}

---

### VectorSearchDataObjectTimeouts <a name="VectorSearchDataObjectTimeouts" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#create VectorSearchDataObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#delete VectorSearchDataObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#update VectorSearchDataObject#update}.

---

### VectorSearchDataObjectVectors <a name="VectorSearchDataObjectVectors" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectors(
  field_name: str,
  dense: VectorSearchDataObjectVectorsDense = None,
  sparse: VectorSearchDataObjectVectorsSparse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#field_name VectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#field_name VectorSearchDataObject#field_name}.

---

##### `dense`<sup>Optional</sup> <a name="dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.dense"></a>

```python
dense: VectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#dense VectorSearchDataObject#dense}

---

##### `sparse`<sup>Optional</sup> <a name="sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors.property.sparse"></a>

```python
sparse: VectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#sparse VectorSearchDataObject#sparse}

---

### VectorSearchDataObjectVectorsDense <a name="VectorSearchDataObjectVectorsDense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectorsDense(
  values: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The float values of the dense vector. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

### VectorSearchDataObjectVectorsSparse <a name="VectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectorsSparse(
  indices: typing.List[typing.Union[int, float]],
  values: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.indices">indices</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The non-zero float values of the sparse vector. |

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.indices"></a>

```python
indices: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#indices VectorSearchDataObject#indices}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchDataObjectTimeoutsOutputReference <a name="VectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VectorSearchDataObjectTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectTimeouts">VectorSearchDataObjectTimeouts</a>

---


### VectorSearchDataObjectVectorsDenseOutputReference <a name="VectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---


### VectorSearchDataObjectVectorsList <a name="VectorSearchDataObjectVectorsList" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VectorSearchDataObjectVectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VectorSearchDataObjectVectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>]

---


### VectorSearchDataObjectVectorsOutputReference <a name="VectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense">put_dense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse">put_sparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetDense">reset_dense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetSparse">reset_sparse</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dense` <a name="put_dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense"></a>

```python
def put_dense(
  values: typing.List[typing.Union[int, float]]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putDense.parameter.values"></a>

- *Type:* typing.List[typing.Union[int, float]]

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

##### `put_sparse` <a name="put_sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```python
def put_sparse(
  indices: typing.List[typing.Union[int, float]],
  values: typing.List[typing.Union[int, float]]
) -> None
```

###### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse.parameter.indices"></a>

- *Type:* typing.List[typing.Union[int, float]]

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#indices VectorSearchDataObject#indices}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.putSparse.parameter.values"></a>

- *Type:* typing.List[typing.Union[int, float]]

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vector_search_data_object#values VectorSearchDataObject#values}

---

##### `reset_dense` <a name="reset_dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```python
def reset_dense() -> None
```

##### `reset_sparse` <a name="reset_sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```python
def reset_sparse() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference">VectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference">VectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.denseInput">dense_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparseInput">sparse_input</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dense`<sup>Required</sup> <a name="dense" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```python
dense: VectorSearchDataObjectVectorsDenseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDenseOutputReference">VectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `sparse`<sup>Required</sup> <a name="sparse" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```python
sparse: VectorSearchDataObjectVectorsSparseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference">VectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `dense_input`<sup>Optional</sup> <a name="dense_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```python
dense_input: VectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsDense">VectorSearchDataObjectVectorsDense</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `sparse_input`<sup>Optional</sup> <a name="sparse_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```python
sparse_input: VectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VectorSearchDataObjectVectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectors">VectorSearchDataObjectVectors</a>

---


### VectorSearchDataObjectVectorsSparseOutputReference <a name="VectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vector_search_data_object

vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">indices_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indices">indices</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indices_input`<sup>Optional</sup> <a name="indices_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```python
indices_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```python
indices: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchDataObject.VectorSearchDataObjectVectorsSparse">VectorSearchDataObjectVectorsSparse</a>

---



