# `chronicleParserExtension` Submodule <a name="`chronicleParserExtension` Submodule" id="@cdktn/provider-google.chronicleParserExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParserExtension <a name="ChronicleParserExtension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtension(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  log_type: str,
  cbn_snippet: str = None,
  deletion_policy: str = None,
  dynamic_parsing: ChronicleParserExtensionDynamicParsing = None,
  field_extractors: ChronicleParserExtensionFieldExtractors = None,
  id: str = None,
  log: str = None,
  project: str = None,
  timeouts: ChronicleParserExtensionTimeouts = None,
  validation_skipped: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.logType">log_type</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.cbnSnippet">cbn_snippet</a></code> | <code>str</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dynamicParsing">dynamic_parsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.log">log</a></code> | <code>str</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.logType"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `cbn_snippet`<sup>Optional</sup> <a name="cbn_snippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.cbnSnippet"></a>

- *Type:* str

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `dynamic_parsing`<sup>Optional</sup> <a name="dynamic_parsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dynamicParsing"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `field_extractors`<sup>Optional</sup> <a name="field_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.fieldExtractors"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.log"></a>

- *Type:* str

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `validation_skipped`<sup>Optional</sup> <a name="validation_skipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.validationSkipped"></a>

- *Type:* bool | cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing">put_dynamic_parsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors">put_field_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet">reset_cbn_snippet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing">reset_dynamic_parsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors">reset_field_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog">reset_log</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped">reset_validation_skipped</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dynamic_parsing` <a name="put_dynamic_parsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing"></a>

```python
def put_dynamic_parsing(
  opted_fields: IResolvable | typing.List[ChronicleParserExtensionDynamicParsingOptedFields] = None
) -> None
```

###### `opted_fields`<sup>Optional</sup> <a name="opted_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing.parameter.optedFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}

---

##### `put_field_extractors` <a name="put_field_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors"></a>

```python
def put_field_extractors(
  append_repeated_fields: bool | IResolvable = None,
  extractors: IResolvable | typing.List[ChronicleParserExtensionFieldExtractorsExtractors] = None,
  log_format: str = None,
  preprocess_config: ChronicleParserExtensionFieldExtractorsPreprocessConfig = None
) -> None
```

###### `append_repeated_fields`<sup>Optional</sup> <a name="append_repeated_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.appendRepeatedFields"></a>

- *Type:* bool | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}

---

###### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.extractors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}

---

###### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.logFormat"></a>

- *Type:* str

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}

---

###### `preprocess_config`<sup>Optional</sup> <a name="preprocess_config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.preprocessConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}.

---

##### `reset_cbn_snippet` <a name="reset_cbn_snippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet"></a>

```python
def reset_cbn_snippet() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_dynamic_parsing` <a name="reset_dynamic_parsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing"></a>

```python
def reset_dynamic_parsing() -> None
```

##### `reset_field_extractors` <a name="reset_field_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors"></a>

```python
def reset_field_extractors() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log` <a name="reset_log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog"></a>

```python
def reset_log() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validation_skipped` <a name="reset_validation_skipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped"></a>

```python
def reset_validation_skipped() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleParserExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleParserExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParserExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing">dynamic_parsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport">extension_validation_report</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime">last_live_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension">parserextension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime">state_last_changed_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport">validation_report</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput">cbn_snippet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput">dynamic_parsing_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput">field_extractors_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput">log_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput">validation_skipped_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet">cbn_snippet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log">log</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dynamic_parsing`<sup>Required</sup> <a name="dynamic_parsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing"></a>

```python
dynamic_parsing: ChronicleParserExtensionDynamicParsingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a>

---

##### `extension_validation_report`<sup>Required</sup> <a name="extension_validation_report" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport"></a>

```python
extension_validation_report: str
```

- *Type:* str

---

##### `field_extractors`<sup>Required</sup> <a name="field_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors"></a>

```python
field_extractors: ChronicleParserExtensionFieldExtractorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a>

---

##### `last_live_time`<sup>Required</sup> <a name="last_live_time" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime"></a>

```python
last_live_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parserextension`<sup>Required</sup> <a name="parserextension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension"></a>

```python
parserextension: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_last_changed_time`<sup>Required</sup> <a name="state_last_changed_time" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime"></a>

```python
state_last_changed_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts"></a>

```python
timeouts: ChronicleParserExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a>

---

##### `validation_report`<sup>Required</sup> <a name="validation_report" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport"></a>

```python
validation_report: str
```

- *Type:* str

---

##### `cbn_snippet_input`<sup>Optional</sup> <a name="cbn_snippet_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput"></a>

```python
cbn_snippet_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `dynamic_parsing_input`<sup>Optional</sup> <a name="dynamic_parsing_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput"></a>

```python
dynamic_parsing_input: ChronicleParserExtensionDynamicParsing
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `field_extractors_input`<sup>Optional</sup> <a name="field_extractors_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput"></a>

```python
field_extractors_input: ChronicleParserExtensionFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_input`<sup>Optional</sup> <a name="log_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput"></a>

```python
log_input: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleParserExtensionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `validation_skipped_input`<sup>Optional</sup> <a name="validation_skipped_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput"></a>

```python
validation_skipped_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cbn_snippet`<sup>Required</sup> <a name="cbn_snippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet"></a>

```python
cbn_snippet: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log"></a>

```python
log: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `validation_skipped`<sup>Required</sup> <a name="validation_skipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped"></a>

```python
validation_skipped: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserExtensionConfig <a name="ChronicleParserExtensionConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  log_type: str,
  cbn_snippet: str = None,
  deletion_policy: str = None,
  dynamic_parsing: ChronicleParserExtensionDynamicParsing = None,
  field_extractors: ChronicleParserExtensionFieldExtractors = None,
  id: str = None,
  log: str = None,
  project: str = None,
  timeouts: ChronicleParserExtensionTimeouts = None,
  validation_skipped: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType">log_type</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet">cbn_snippet</a></code> | <code>str</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing">dynamic_parsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log">log</a></code> | <code>str</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `cbn_snippet`<sup>Optional</sup> <a name="cbn_snippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet"></a>

```python
cbn_snippet: str
```

- *Type:* str

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `dynamic_parsing`<sup>Optional</sup> <a name="dynamic_parsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing"></a>

```python
dynamic_parsing: ChronicleParserExtensionDynamicParsing
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `field_extractors`<sup>Optional</sup> <a name="field_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors"></a>

```python
field_extractors: ChronicleParserExtensionFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log"></a>

```python
log: str
```

- *Type:* str

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts"></a>

```python
timeouts: ChronicleParserExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `validation_skipped`<sup>Optional</sup> <a name="validation_skipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped"></a>

```python
validation_skipped: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

### ChronicleParserExtensionDynamicParsing <a name="ChronicleParserExtensionDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionDynamicParsing(
  opted_fields: IResolvable | typing.List[ChronicleParserExtensionDynamicParsingOptedFields] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields">opted_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]</code> | opted_fields block. |

---

##### `opted_fields`<sup>Optional</sup> <a name="opted_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields"></a>

```python
opted_fields: IResolvable | typing.List[ChronicleParserExtensionDynamicParsingOptedFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}

---

### ChronicleParserExtensionDynamicParsingOptedFields <a name="ChronicleParserExtensionDynamicParsingOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields(
  path: str = None,
  sample_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path">path</a></code> | <code>str</code> | Path of the log field. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue">sample_value</a></code> | <code>str</code> | Sample value of the log field. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#path ChronicleParserExtension#path}

---

##### `sample_value`<sup>Optional</sup> <a name="sample_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue"></a>

```python
sample_value: str
```

- *Type:* str

Sample value of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#sample_value ChronicleParserExtension#sample_value}

---

### ChronicleParserExtensionFieldExtractors <a name="ChronicleParserExtensionFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractors(
  append_repeated_fields: bool | IResolvable = None,
  extractors: IResolvable | typing.List[ChronicleParserExtensionFieldExtractorsExtractors] = None,
  log_format: str = None,
  preprocess_config: ChronicleParserExtensionFieldExtractorsPreprocessConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields">append_repeated_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat">log_format</a></code> | <code>str</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig">preprocess_config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `append_repeated_fields`<sup>Optional</sup> <a name="append_repeated_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields"></a>

```python
append_repeated_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors"></a>

```python
extractors: IResolvable | typing.List[ChronicleParserExtensionFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}

---

##### `preprocess_config`<sup>Optional</sup> <a name="preprocess_config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig"></a>

```python
preprocess_config: ChronicleParserExtensionFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}

---

### ChronicleParserExtensionFieldExtractorsExtractors <a name="ChronicleParserExtensionFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors(
  destination_path: str = None,
  field_path: str = None,
  precondition_op: str = None,
  precondition_path: str = None,
  precondition_value: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath">destination_path</a></code> | <code>str</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath">field_path</a></code> | <code>str</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp">precondition_op</a></code> | <code>str</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath">precondition_path</a></code> | <code>str</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue">precondition_value</a></code> | <code>str</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value">value</a></code> | <code>str</code> | Value to be mapped to the destination path directly. |

---

##### `destination_path`<sup>Optional</sup> <a name="destination_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#destination_path ChronicleParserExtension#destination_path}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#field_path ChronicleParserExtension#field_path}

---

##### `precondition_op`<sup>Optional</sup> <a name="precondition_op" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp"></a>

```python
precondition_op: str
```

- *Type:* str

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#precondition_op ChronicleParserExtension#precondition_op}

---

##### `precondition_path`<sup>Optional</sup> <a name="precondition_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath"></a>

```python
precondition_path: str
```

- *Type:* str

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#precondition_path ChronicleParserExtension#precondition_path}

---

##### `precondition_value`<sup>Optional</sup> <a name="precondition_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue"></a>

```python
precondition_value: str
```

- *Type:* str

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#precondition_value ChronicleParserExtension#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value"></a>

```python
value: str
```

- *Type:* str

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#value ChronicleParserExtension#value}

---

### ChronicleParserExtensionFieldExtractorsPreprocessConfig <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig(
  grok_regex: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex">grok_regex</a></code> | <code>str</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>str</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grok_regex`<sup>Optional</sup> <a name="grok_regex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```python
grok_regex: str
```

- *Type:* str

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}

---

### ChronicleParserExtensionTimeouts <a name="ChronicleParserExtensionTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserExtensionDynamicParsingOptedFieldsList <a name="ChronicleParserExtensionDynamicParsingOptedFieldsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChronicleParserExtensionDynamicParsingOptedFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]

---


### ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference <a name="ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue">reset_sample_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_sample_value` <a name="reset_sample_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue"></a>

```python
def reset_sample_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput">sample_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue">sample_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `sample_value_input`<sup>Optional</sup> <a name="sample_value_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput"></a>

```python
sample_value_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `sample_value`<sup>Required</sup> <a name="sample_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue"></a>

```python
sample_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleParserExtensionDynamicParsingOptedFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>

---


### ChronicleParserExtensionDynamicParsingOutputReference <a name="ChronicleParserExtensionDynamicParsingOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields">put_opted_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields">reset_opted_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_opted_fields` <a name="put_opted_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields"></a>

```python
def put_opted_fields(
  value: IResolvable | typing.List[ChronicleParserExtensionDynamicParsingOptedFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]

---

##### `reset_opted_fields` <a name="reset_opted_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields"></a>

```python
def reset_opted_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields">opted_fields</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput">opted_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `opted_fields`<sup>Required</sup> <a name="opted_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields"></a>

```python
opted_fields: ChronicleParserExtensionDynamicParsingOptedFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a>

---

##### `opted_fields_input`<sup>Optional</sup> <a name="opted_fields_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput"></a>

```python
opted_fields_input: IResolvable | typing.List[ChronicleParserExtensionDynamicParsingOptedFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserExtensionDynamicParsing
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---


### ChronicleParserExtensionFieldExtractorsExtractorsList <a name="ChronicleParserExtensionFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleParserExtensionFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChronicleParserExtensionFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]

---


### ChronicleParserExtensionFieldExtractorsExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath">reset_destination_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp">reset_precondition_op</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath">reset_precondition_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue">reset_precondition_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_path` <a name="reset_destination_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```python
def reset_destination_path() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_precondition_op` <a name="reset_precondition_op" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```python
def reset_precondition_op() -> None
```

##### `reset_precondition_path` <a name="reset_precondition_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```python
def reset_precondition_path() -> None
```

##### `reset_precondition_value` <a name="reset_precondition_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```python
def reset_precondition_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destination_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">precondition_op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">precondition_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">precondition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp">precondition_op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath">precondition_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue">precondition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_path_input`<sup>Optional</sup> <a name="destination_path_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```python
destination_path_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `precondition_op_input`<sup>Optional</sup> <a name="precondition_op_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```python
precondition_op_input: str
```

- *Type:* str

---

##### `precondition_path_input`<sup>Optional</sup> <a name="precondition_path_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```python
precondition_path_input: str
```

- *Type:* str

---

##### `precondition_value_input`<sup>Optional</sup> <a name="precondition_value_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```python
precondition_value_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `precondition_op`<sup>Required</sup> <a name="precondition_op" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```python
precondition_op: str
```

- *Type:* str

---

##### `precondition_path`<sup>Required</sup> <a name="precondition_path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```python
precondition_path: str
```

- *Type:* str

---

##### `precondition_value`<sup>Required</sup> <a name="precondition_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```python
precondition_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleParserExtensionFieldExtractorsExtractors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors">put_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig">put_preprocess_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields">reset_append_repeated_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors">reset_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig">reset_preprocess_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extractors` <a name="put_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors"></a>

```python
def put_extractors(
  value: IResolvable | typing.List[ChronicleParserExtensionFieldExtractorsExtractors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]

---

##### `put_preprocess_config` <a name="put_preprocess_config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig"></a>

```python
def put_preprocess_config(
  grok_regex: str = None,
  target: str = None
) -> None
```

###### `grok_regex`<sup>Optional</sup> <a name="grok_regex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.grokRegex"></a>

- *Type:* str

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.target"></a>

- *Type:* str

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}

---

##### `reset_append_repeated_fields` <a name="reset_append_repeated_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```python
def reset_append_repeated_fields() -> None
```

##### `reset_extractors` <a name="reset_extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors"></a>

```python
def reset_extractors() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_preprocess_config` <a name="reset_preprocess_config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```python
def reset_preprocess_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig">preprocess_config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet">transformed_cbn_snippet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">append_repeated_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput">extractors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput">preprocess_config_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields">append_repeated_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors"></a>

```python
extractors: ChronicleParserExtensionFieldExtractorsExtractorsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a>

---

##### `preprocess_config`<sup>Required</sup> <a name="preprocess_config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig"></a>

```python
preprocess_config: ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformed_cbn_snippet`<sup>Required</sup> <a name="transformed_cbn_snippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```python
transformed_cbn_snippet: str
```

- *Type:* str

---

##### `append_repeated_fields_input`<sup>Optional</sup> <a name="append_repeated_fields_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```python
append_repeated_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `extractors_input`<sup>Optional</sup> <a name="extractors_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput"></a>

```python
extractors_input: IResolvable | typing.List[ChronicleParserExtensionFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>]

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `preprocess_config_input`<sup>Optional</sup> <a name="preprocess_config_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```python
preprocess_config_input: ChronicleParserExtensionFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `append_repeated_fields`<sup>Required</sup> <a name="append_repeated_fields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```python
append_repeated_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserExtensionFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">reset_grok_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grok_regex` <a name="reset_grok_regex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```python
def reset_grok_regex() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grok_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grok_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grok_regex_input`<sup>Optional</sup> <a name="grok_regex_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```python
grok_regex_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `grok_regex`<sup>Required</sup> <a name="grok_regex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```python
grok_regex: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserExtensionFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserExtensionTimeoutsOutputReference <a name="ChronicleParserExtensionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser_extension

chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleParserExtensionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---



