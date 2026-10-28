# `vertexAiRagFile` Submodule <a name="`vertexAiRagFile` Submodule" id="@cdktn/provider-google.vertexAiRagFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagFile <a name="VertexAiRagFile" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file google_vertex_ai_rag_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rag_corpus: str,
  region: str,
  deletion_policy: str = None,
  gcs_source: VertexAiRagFileGcsSource = None,
  google_drive_source: VertexAiRagFileGoogleDriveSource = None,
  id: str = None,
  max_embedding_requests_per_min: typing.Union[int, float] = None,
  project: str = None,
  rag_file_parsing_config: VertexAiRagFileRagFileParsingConfig = None,
  rag_file_transformation_config: VertexAiRagFileRagFileTransformationConfig = None,
  timeouts: VertexAiRagFileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.ragCorpus">rag_corpus</a></code> | <code>str</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.gcsSource">gcs_source</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.googleDriveSource">google_drive_source</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.maxEmbeddingRequestsPerMin">max_embedding_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.ragFileParsingConfig">rag_file_parsing_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.ragFileTransformationConfig">rag_file_transformation_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rag_corpus`<sup>Required</sup> <a name="rag_corpus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.ragCorpus"></a>

- *Type:* str

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_corpus VertexAiRagFile#rag_corpus}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.region"></a>

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#region VertexAiRagFile#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#deletion_policy VertexAiRagFile#deletion_policy}

---

##### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.gcsSource"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#gcs_source VertexAiRagFile#gcs_source}

---

##### `google_drive_source`<sup>Optional</sup> <a name="google_drive_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.googleDriveSource"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#google_drive_source VertexAiRagFile#google_drive_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_embedding_requests_per_min`<sup>Optional</sup> <a name="max_embedding_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.maxEmbeddingRequestsPerMin"></a>

- *Type:* typing.Union[int, float]

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_embedding_requests_per_min VertexAiRagFile#max_embedding_requests_per_min}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}.

---

##### `rag_file_parsing_config`<sup>Optional</sup> <a name="rag_file_parsing_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.ragFileParsingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_parsing_config VertexAiRagFile#rag_file_parsing_config}

---

##### `rag_file_transformation_config`<sup>Optional</sup> <a name="rag_file_transformation_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.ragFileTransformationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_transformation_config VertexAiRagFile#rag_file_transformation_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#timeouts VertexAiRagFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGcsSource">put_gcs_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGoogleDriveSource">put_google_drive_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig">put_rag_file_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileTransformationConfig">put_rag_file_transformation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGcsSource">reset_gcs_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGoogleDriveSource">reset_google_drive_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetMaxEmbeddingRequestsPerMin">reset_max_embedding_requests_per_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileParsingConfig">reset_rag_file_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileTransformationConfig">reset_rag_file_transformation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gcs_source` <a name="put_gcs_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGcsSource"></a>

```python
def put_gcs_source(
  uris: typing.List[str]
) -> None
```

###### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGcsSource.parameter.uris"></a>

- *Type:* typing.List[str]

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#uris VertexAiRagFile#uris}

---

##### `put_google_drive_source` <a name="put_google_drive_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGoogleDriveSource"></a>

```python
def put_google_drive_source(
  resource_ids: VertexAiRagFileGoogleDriveSourceResourceIds
) -> None
```

###### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putGoogleDriveSource.parameter.resourceIds"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_ids VertexAiRagFile#resource_ids}

---

##### `put_rag_file_parsing_config` <a name="put_rag_file_parsing_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig"></a>

```python
def put_rag_file_parsing_config(
  layout_parser: VertexAiRagFileRagFileParsingConfigLayoutParser = None,
  llm_parser: VertexAiRagFileRagFileParsingConfigLlmParser = None
) -> None
```

###### `layout_parser`<sup>Optional</sup> <a name="layout_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig.parameter.layoutParser"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#layout_parser VertexAiRagFile#layout_parser}

---

###### `llm_parser`<sup>Optional</sup> <a name="llm_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileParsingConfig.parameter.llmParser"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#llm_parser VertexAiRagFile#llm_parser}

---

##### `put_rag_file_transformation_config` <a name="put_rag_file_transformation_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileTransformationConfig"></a>

```python
def put_rag_file_transformation_config(
  rag_file_chunking_config: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig = None
) -> None
```

###### `rag_file_chunking_config`<sup>Optional</sup> <a name="rag_file_chunking_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putRagFileTransformationConfig.parameter.ragFileChunkingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_chunking_config VertexAiRagFile#rag_file_chunking_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#create VertexAiRagFile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#delete VertexAiRagFile#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_gcs_source` <a name="reset_gcs_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGcsSource"></a>

```python
def reset_gcs_source() -> None
```

##### `reset_google_drive_source` <a name="reset_google_drive_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetGoogleDriveSource"></a>

```python
def reset_google_drive_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_embedding_requests_per_min` <a name="reset_max_embedding_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetMaxEmbeddingRequestsPerMin"></a>

```python
def reset_max_embedding_requests_per_min() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rag_file_parsing_config` <a name="reset_rag_file_parsing_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileParsingConfig"></a>

```python
def reset_rag_file_parsing_config() -> None
```

##### `reset_rag_file_transformation_config` <a name="reset_rag_file_transformation_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetRagFileTransformationConfig"></a>

```python
def reset_rag_file_transformation_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiRagFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiRagFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiRagFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiRagFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fileStatus">file_status</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList">VertexAiRagFileFileStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSource">gcs_source</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference">VertexAiRagFileGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSource">google_drive_source</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference">VertexAiRagFileGoogleDriveSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfig">rag_file_parsing_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference">VertexAiRagFileRagFileParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfig">rag_file_transformation_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference">VertexAiRagFileRagFileTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference">VertexAiRagFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.userMetadata">user_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSourceInput">gcs_source_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSourceInput">google_drive_source_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMinInput">max_embedding_requests_per_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpusInput">rag_corpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfigInput">rag_file_parsing_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfigInput">rag_file_transformation_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMin">max_embedding_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpus">rag_corpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `file_status`<sup>Required</sup> <a name="file_status" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.fileStatus"></a>

```python
file_status: VertexAiRagFileFileStatusList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList">VertexAiRagFileFileStatusList</a>

---

##### `gcs_source`<sup>Required</sup> <a name="gcs_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSource"></a>

```python
gcs_source: VertexAiRagFileGcsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference">VertexAiRagFileGcsSourceOutputReference</a>

---

##### `google_drive_source`<sup>Required</sup> <a name="google_drive_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSource"></a>

```python
google_drive_source: VertexAiRagFileGoogleDriveSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference">VertexAiRagFileGoogleDriveSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rag_file_parsing_config`<sup>Required</sup> <a name="rag_file_parsing_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfig"></a>

```python
rag_file_parsing_config: VertexAiRagFileRagFileParsingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference">VertexAiRagFileRagFileParsingConfigOutputReference</a>

---

##### `rag_file_transformation_config`<sup>Required</sup> <a name="rag_file_transformation_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfig"></a>

```python
rag_file_transformation_config: VertexAiRagFileRagFileTransformationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference">VertexAiRagFileRagFileTransformationConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeouts"></a>

```python
timeouts: VertexAiRagFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference">VertexAiRagFileTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `user_metadata`<sup>Required</sup> <a name="user_metadata" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.userMetadata"></a>

```python
user_metadata: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gcs_source_input`<sup>Optional</sup> <a name="gcs_source_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.gcsSourceInput"></a>

```python
gcs_source_input: VertexAiRagFileGcsSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

---

##### `google_drive_source_input`<sup>Optional</sup> <a name="google_drive_source_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.googleDriveSourceInput"></a>

```python
google_drive_source_input: VertexAiRagFileGoogleDriveSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_embedding_requests_per_min_input`<sup>Optional</sup> <a name="max_embedding_requests_per_min_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMinInput"></a>

```python
max_embedding_requests_per_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rag_corpus_input`<sup>Optional</sup> <a name="rag_corpus_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpusInput"></a>

```python
rag_corpus_input: str
```

- *Type:* str

---

##### `rag_file_parsing_config_input`<sup>Optional</sup> <a name="rag_file_parsing_config_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileParsingConfigInput"></a>

```python
rag_file_parsing_config_input: VertexAiRagFileRagFileParsingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

---

##### `rag_file_transformation_config_input`<sup>Optional</sup> <a name="rag_file_transformation_config_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragFileTransformationConfigInput"></a>

```python
rag_file_transformation_config_input: VertexAiRagFileRagFileTransformationConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VertexAiRagFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_embedding_requests_per_min`<sup>Required</sup> <a name="max_embedding_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.maxEmbeddingRequestsPerMin"></a>

```python
max_embedding_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rag_corpus`<sup>Required</sup> <a name="rag_corpus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.ragCorpus"></a>

```python
rag_corpus: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagFileConfig <a name="VertexAiRagFileConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rag_corpus: str,
  region: str,
  deletion_policy: str = None,
  gcs_source: VertexAiRagFileGcsSource = None,
  google_drive_source: VertexAiRagFileGoogleDriveSource = None,
  id: str = None,
  max_embedding_requests_per_min: typing.Union[int, float] = None,
  project: str = None,
  rag_file_parsing_config: VertexAiRagFileRagFileParsingConfig = None,
  rag_file_transformation_config: VertexAiRagFileRagFileTransformationConfig = None,
  timeouts: VertexAiRagFileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragCorpus">rag_corpus</a></code> | <code>str</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.gcsSource">gcs_source</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.googleDriveSource">google_drive_source</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin">max_embedding_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileParsingConfig">rag_file_parsing_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileTransformationConfig">rag_file_transformation_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rag_corpus`<sup>Required</sup> <a name="rag_corpus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragCorpus"></a>

```python
rag_corpus: str
```

- *Type:* str

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_corpus VertexAiRagFile#rag_corpus}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#region VertexAiRagFile#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#deletion_policy VertexAiRagFile#deletion_policy}

---

##### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.gcsSource"></a>

```python
gcs_source: VertexAiRagFileGcsSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#gcs_source VertexAiRagFile#gcs_source}

---

##### `google_drive_source`<sup>Optional</sup> <a name="google_drive_source" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.googleDriveSource"></a>

```python
google_drive_source: VertexAiRagFileGoogleDriveSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#google_drive_source VertexAiRagFile#google_drive_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_embedding_requests_per_min`<sup>Optional</sup> <a name="max_embedding_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin"></a>

```python
max_embedding_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_embedding_requests_per_min VertexAiRagFile#max_embedding_requests_per_min}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}.

---

##### `rag_file_parsing_config`<sup>Optional</sup> <a name="rag_file_parsing_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileParsingConfig"></a>

```python
rag_file_parsing_config: VertexAiRagFileRagFileParsingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_parsing_config VertexAiRagFile#rag_file_parsing_config}

---

##### `rag_file_transformation_config`<sup>Optional</sup> <a name="rag_file_transformation_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.ragFileTransformationConfig"></a>

```python
rag_file_transformation_config: VertexAiRagFileRagFileTransformationConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_transformation_config VertexAiRagFile#rag_file_transformation_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileConfig.property.timeouts"></a>

```python
timeouts: VertexAiRagFileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#timeouts VertexAiRagFile#timeouts}

---

### VertexAiRagFileFileStatus <a name="VertexAiRagFileFileStatus" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileFileStatus()
```


### VertexAiRagFileGcsSource <a name="VertexAiRagFileGcsSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileGcsSource(
  uris: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource.property.uris">uris</a></code> | <code>typing.List[str]</code> | The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile. |

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#uris VertexAiRagFile#uris}

---

### VertexAiRagFileGoogleDriveSource <a name="VertexAiRagFileGoogleDriveSource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileGoogleDriveSource(
  resource_ids: VertexAiRagFileGoogleDriveSourceResourceIds
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource.property.resourceIds">resource_ids</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a></code> | resource_ids block. |

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource.property.resourceIds"></a>

```python
resource_ids: VertexAiRagFileGoogleDriveSourceResourceIds
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_ids VertexAiRagFile#resource_ids}

---

### VertexAiRagFileGoogleDriveSourceResourceIds <a name="VertexAiRagFileGoogleDriveSourceResourceIds" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds(
  resource_id: str,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId">resource_id</a></code> | <code>str</code> | The ID of the Google Drive file. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType">resource_type</a></code> | <code>str</code> | The type of the Google Drive resource. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_id VertexAiRagFile#resource_id}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_type VertexAiRagFile#resource_type}

---

### VertexAiRagFileRagFileParsingConfig <a name="VertexAiRagFileRagFileParsingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileParsingConfig(
  layout_parser: VertexAiRagFileRagFileParsingConfigLayoutParser = None,
  llm_parser: VertexAiRagFileRagFileParsingConfigLlmParser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.layoutParser">layout_parser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | layout_parser block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.llmParser">llm_parser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a></code> | llm_parser block. |

---

##### `layout_parser`<sup>Optional</sup> <a name="layout_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.layoutParser"></a>

```python
layout_parser: VertexAiRagFileRagFileParsingConfigLayoutParser
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#layout_parser VertexAiRagFile#layout_parser}

---

##### `llm_parser`<sup>Optional</sup> <a name="llm_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig.property.llmParser"></a>

```python
llm_parser: VertexAiRagFileRagFileParsingConfigLlmParser
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#llm_parser VertexAiRagFile#llm_parser}

---

### VertexAiRagFileRagFileParsingConfigLayoutParser <a name="VertexAiRagFileRagFileParsingConfigLayoutParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser(
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  processor_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of requests the job is allowed to make to the Document AI processor per minute. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName">processor_name</a></code> | <code>str</code> | The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'. |

---

##### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}

---

##### `processor_name`<sup>Optional</sup> <a name="processor_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName"></a>

```python
processor_name: str
```

- *Type:* str

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#processor_name VertexAiRagFile#processor_name}

---

### VertexAiRagFileRagFileParsingConfigLlmParser <a name="VertexAiRagFileRagFileParsingConfigLlmParser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser(
  custom_parsing_prompt: str = None,
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  model_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt">custom_parsing_prompt</a></code> | <code>str</code> | The prompt to use for parsing. If not specified, a default prompt is used. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of requests the job is allowed to make to the LLM model per minute. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.modelName">model_name</a></code> | <code>str</code> | The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'. |

---

##### `custom_parsing_prompt`<sup>Optional</sup> <a name="custom_parsing_prompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt"></a>

```python
custom_parsing_prompt: str
```

- *Type:* str

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#custom_parsing_prompt VertexAiRagFile#custom_parsing_prompt}

---

##### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#model_name VertexAiRagFile#model_name}

---

### VertexAiRagFileRagFileTransformationConfig <a name="VertexAiRagFileRagFileTransformationConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig(
  rag_file_chunking_config: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig">rag_file_chunking_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | rag_file_chunking_config block. |

---

##### `rag_file_chunking_config`<sup>Optional</sup> <a name="rag_file_chunking_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig"></a>

```python
rag_file_chunking_config: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_chunking_config VertexAiRagFile#rag_file_chunking_config}

---

### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig(
  fixed_length_chunking: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking">fixed_length_chunking</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | fixed_length_chunking block. |

---

##### `fixed_length_chunking`<sup>Optional</sup> <a name="fixed_length_chunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking"></a>

```python
fixed_length_chunking: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#fixed_length_chunking VertexAiRagFile#fixed_length_chunking}

---

### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking(
  chunk_overlap: typing.Union[int, float] = None,
  chunk_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | The overlap between chunks. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | The size of the chunks. |

---

##### `chunk_overlap`<sup>Optional</sup> <a name="chunk_overlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_overlap VertexAiRagFile#chunk_overlap}

---

##### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_size VertexAiRagFile#chunk_size}

---

### VertexAiRagFileTimeouts <a name="VertexAiRagFileTimeouts" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#create VertexAiRagFile#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#delete VertexAiRagFile#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#create VertexAiRagFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#delete VertexAiRagFile#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagFileFileStatusList <a name="VertexAiRagFileFileStatusList" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileFileStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiRagFileFileStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiRagFileFileStatusOutputReference <a name="VertexAiRagFileFileStatusOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileFileStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.errorStatus">error_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus">VertexAiRagFileFileStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.errorStatus"></a>

```python
error_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatusOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileFileStatus
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileFileStatus">VertexAiRagFileFileStatus</a>

---


### VertexAiRagFileGcsSourceOutputReference <a name="VertexAiRagFileGcsSourceOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSourceOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileGcsSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGcsSource">VertexAiRagFileGcsSource</a>

---


### VertexAiRagFileGoogleDriveSourceOutputReference <a name="VertexAiRagFileGoogleDriveSourceOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds">put_resource_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_ids` <a name="put_resource_ids" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds"></a>

```python
def put_resource_ids(
  resource_id: str,
  resource_type: str = None
) -> None
```

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.resourceId"></a>

- *Type:* str

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_id VertexAiRagFile#resource_id}

---

###### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.resourceType"></a>

- *Type:* str

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_type VertexAiRagFile#resource_type}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds">resource_ids</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput">resource_ids_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds"></a>

```python
resource_ids: VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a>

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput"></a>

```python
resource_ids_input: VertexAiRagFileGoogleDriveSourceResourceIds
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileGoogleDriveSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSource">VertexAiRagFileGoogleDriveSource</a>

---


### VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference <a name="VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileGoogleDriveSourceResourceIds
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileGoogleDriveSourceResourceIds">VertexAiRagFileGoogleDriveSourceResourceIds</a>

---


### VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference <a name="VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin">reset_max_parsing_requests_per_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName">reset_processor_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_parsing_requests_per_min` <a name="reset_max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```python
def reset_max_parsing_requests_per_min() -> None
```

##### `reset_processor_name` <a name="reset_processor_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName"></a>

```python
def reset_processor_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput">max_parsing_requests_per_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput">processor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName">processor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min_input`<sup>Optional</sup> <a name="max_parsing_requests_per_min_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```python
max_parsing_requests_per_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_name_input`<sup>Optional</sup> <a name="processor_name_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput"></a>

```python
processor_name_input: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min`<sup>Required</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_name`<sup>Required</sup> <a name="processor_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName"></a>

```python
processor_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileRagFileParsingConfigLayoutParser
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

---


### VertexAiRagFileRagFileParsingConfigLlmParserOutputReference <a name="VertexAiRagFileRagFileParsingConfigLlmParserOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt">reset_custom_parsing_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin">reset_max_parsing_requests_per_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName">reset_model_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_parsing_prompt` <a name="reset_custom_parsing_prompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt"></a>

```python
def reset_custom_parsing_prompt() -> None
```

##### `reset_max_parsing_requests_per_min` <a name="reset_max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```python
def reset_max_parsing_requests_per_min() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName"></a>

```python
def reset_model_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput">custom_parsing_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput">max_parsing_requests_per_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt">custom_parsing_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_parsing_prompt_input`<sup>Optional</sup> <a name="custom_parsing_prompt_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput"></a>

```python
custom_parsing_prompt_input: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min_input`<sup>Optional</sup> <a name="max_parsing_requests_per_min_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```python
max_parsing_requests_per_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `custom_parsing_prompt`<sup>Required</sup> <a name="custom_parsing_prompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt"></a>

```python
custom_parsing_prompt: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min`<sup>Required</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileRagFileParsingConfigLlmParser
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

---


### VertexAiRagFileRagFileParsingConfigOutputReference <a name="VertexAiRagFileRagFileParsingConfigOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser">put_layout_parser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser">put_llm_parser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser">reset_layout_parser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser">reset_llm_parser</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layout_parser` <a name="put_layout_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser"></a>

```python
def put_layout_parser(
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  processor_name: str = None
) -> None
```

###### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.maxParsingRequestsPerMin"></a>

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}

---

###### `processor_name`<sup>Optional</sup> <a name="processor_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.processorName"></a>

- *Type:* str

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#processor_name VertexAiRagFile#processor_name}

---

##### `put_llm_parser` <a name="put_llm_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser"></a>

```python
def put_llm_parser(
  custom_parsing_prompt: str = None,
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  model_name: str = None
) -> None
```

###### `custom_parsing_prompt`<sup>Optional</sup> <a name="custom_parsing_prompt" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.customParsingPrompt"></a>

- *Type:* str

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#custom_parsing_prompt VertexAiRagFile#custom_parsing_prompt}

---

###### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.maxParsingRequestsPerMin"></a>

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}

---

###### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.modelName"></a>

- *Type:* str

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#model_name VertexAiRagFile#model_name}

---

##### `reset_layout_parser` <a name="reset_layout_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser"></a>

```python
def reset_layout_parser() -> None
```

##### `reset_llm_parser` <a name="reset_llm_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser"></a>

```python
def reset_llm_parser() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser">layout_parser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser">llm_parser</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference">VertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput">layout_parser_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput">llm_parser_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layout_parser`<sup>Required</sup> <a name="layout_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser"></a>

```python
layout_parser: VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a>

---

##### `llm_parser`<sup>Required</sup> <a name="llm_parser" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser"></a>

```python
llm_parser: VertexAiRagFileRagFileParsingConfigLlmParserOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParserOutputReference">VertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a>

---

##### `layout_parser_input`<sup>Optional</sup> <a name="layout_parser_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput"></a>

```python
layout_parser_input: VertexAiRagFileRagFileParsingConfigLayoutParser
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLayoutParser">VertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `llm_parser_input`<sup>Optional</sup> <a name="llm_parser_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput"></a>

```python
llm_parser_input: VertexAiRagFileRagFileParsingConfigLlmParser
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigLlmParser">VertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileRagFileParsingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileParsingConfig">VertexAiRagFileRagFileParsingConfig</a>

---


### VertexAiRagFileRagFileTransformationConfigOutputReference <a name="VertexAiRagFileRagFileTransformationConfigOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig">put_rag_file_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig">reset_rag_file_chunking_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rag_file_chunking_config` <a name="put_rag_file_chunking_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig"></a>

```python
def put_rag_file_chunking_config(
  fixed_length_chunking: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking = None
) -> None
```

###### `fixed_length_chunking`<sup>Optional</sup> <a name="fixed_length_chunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig.parameter.fixedLengthChunking"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#fixed_length_chunking VertexAiRagFile#fixed_length_chunking}

---

##### `reset_rag_file_chunking_config` <a name="reset_rag_file_chunking_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig"></a>

```python
def reset_rag_file_chunking_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig">rag_file_chunking_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput">rag_file_chunking_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rag_file_chunking_config`<sup>Required</sup> <a name="rag_file_chunking_config" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig"></a>

```python
rag_file_chunking_config: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a>

---

##### `rag_file_chunking_config_input`<sup>Optional</sup> <a name="rag_file_chunking_config_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput"></a>

```python
rag_file_chunking_config_input: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileRagFileTransformationConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfig">VertexAiRagFileRagFileTransformationConfig</a>

---


### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap">reset_chunk_overlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize">reset_chunk_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_chunk_overlap` <a name="reset_chunk_overlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap"></a>

```python
def reset_chunk_overlap() -> None
```

##### `reset_chunk_size` <a name="reset_chunk_size" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize"></a>

```python
def reset_chunk_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput">chunk_overlap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput">chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunk_overlap_input`<sup>Optional</sup> <a name="chunk_overlap_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput"></a>

```python
chunk_overlap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size_input`<sup>Optional</sup> <a name="chunk_size_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput"></a>

```python
chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_overlap`<sup>Required</sup> <a name="chunk_overlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---


### VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference <a name="VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking">put_fixed_length_chunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking">reset_fixed_length_chunking</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fixed_length_chunking` <a name="put_fixed_length_chunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking"></a>

```python
def put_fixed_length_chunking(
  chunk_overlap: typing.Union[int, float] = None,
  chunk_size: typing.Union[int, float] = None
) -> None
```

###### `chunk_overlap`<sup>Optional</sup> <a name="chunk_overlap" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.chunkOverlap"></a>

- *Type:* typing.Union[int, float]

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_overlap VertexAiRagFile#chunk_overlap}

---

###### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.chunkSize"></a>

- *Type:* typing.Union[int, float]

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_size VertexAiRagFile#chunk_size}

---

##### `reset_fixed_length_chunking` <a name="reset_fixed_length_chunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking"></a>

```python
def reset_fixed_length_chunking() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking">fixed_length_chunking</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput">fixed_length_chunking_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_length_chunking`<sup>Required</sup> <a name="fixed_length_chunking" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking"></a>

```python
fixed_length_chunking: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a>

---

##### `fixed_length_chunking_input`<sup>Optional</sup> <a name="fixed_length_chunking_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput"></a>

```python
fixed_length_chunking_input: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---


### VertexAiRagFileTimeoutsOutputReference <a name="VertexAiRagFileTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_rag_file

vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiRagFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiRagFile.VertexAiRagFileTimeouts">VertexAiRagFileTimeouts</a>

---



