# `bigqueryAnalyticsHubQueryTemplate` Submodule <a name="`bigqueryAnalyticsHubQueryTemplate` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubQueryTemplate <a name="BigqueryAnalyticsHubQueryTemplate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_exchange_id: str,
  display_name: str,
  location: str,
  query_template_id: str,
  deletion_policy: str = None,
  description: str = None,
  documentation: str = None,
  id: str = None,
  primary_contact: str = None,
  project: str = None,
  routine: BigqueryAnalyticsHubQueryTemplateRoutine = None,
  submit: bool | IResolvable = None,
  timeouts: BigqueryAnalyticsHubQueryTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.queryTemplateId">query_template_id</a></code> | <code>str</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.documentation">documentation</a></code> | <code>str</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.primaryContact">primary_contact</a></code> | <code>str</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.routine">routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.submit">submit</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#data_exchange_id BigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#display_name BigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#location BigqueryAnalyticsHubQueryTemplate#location}

---

##### `query_template_id`<sup>Required</sup> <a name="query_template_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.queryTemplateId"></a>

- *Type:* str

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#query_template_id BigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#deletion_policy BigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.description"></a>

- *Type:* str

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#description BigqueryAnalyticsHubQueryTemplate#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.documentation"></a>

- *Type:* str

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#documentation BigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primary_contact`<sup>Optional</sup> <a name="primary_contact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.primaryContact"></a>

- *Type:* str

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#primary_contact BigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}.

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.routine"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#routine BigqueryAnalyticsHubQueryTemplate#routine}

---

##### `submit`<sup>Optional</sup> <a name="submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.submit"></a>

- *Type:* bool | cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#submit BigqueryAnalyticsHubQueryTemplate#submit}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#timeouts BigqueryAnalyticsHubQueryTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine">put_routine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDocumentation">reset_documentation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetPrimaryContact">reset_primary_contact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetRoutine">reset_routine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetSubmit">reset_submit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routine` <a name="put_routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine"></a>

```python
def put_routine(
  definition_body: str = None,
  routine_type: str = None
) -> None
```

###### `definition_body`<sup>Optional</sup> <a name="definition_body" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.definitionBody"></a>

- *Type:* str

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#definition_body BigqueryAnalyticsHubQueryTemplate#definition_body}

---

###### `routine_type`<sup>Optional</sup> <a name="routine_type" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.routineType"></a>

- *Type:* str

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#routine_type BigqueryAnalyticsHubQueryTemplate#routine_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_documentation` <a name="reset_documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDocumentation"></a>

```python
def reset_documentation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_primary_contact` <a name="reset_primary_contact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetPrimaryContact"></a>

```python
def reset_primary_contact() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_routine` <a name="reset_routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetRoutine"></a>

```python
def reset_routine() -> None
```

##### `reset_submit` <a name="reset_submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetSubmit"></a>

```python
def reset_submit() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryAnalyticsHubQueryTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryAnalyticsHubQueryTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubQueryTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routine">routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference">BigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentationInput">documentation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContactInput">primary_contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput">query_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routineInput">routine_input</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submitInput">submit_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentation">documentation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContact">primary_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateId">query_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submit">submit</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routine"></a>

```python
routine: BigqueryAnalyticsHubQueryTemplateRoutineOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference">BigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeouts"></a>

```python
timeouts: BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `documentation_input`<sup>Optional</sup> <a name="documentation_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentationInput"></a>

```python
documentation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `primary_contact_input`<sup>Optional</sup> <a name="primary_contact_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContactInput"></a>

```python
primary_contact_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `query_template_id_input`<sup>Optional</sup> <a name="query_template_id_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput"></a>

```python
query_template_id_input: str
```

- *Type:* str

---

##### `routine_input`<sup>Optional</sup> <a name="routine_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routineInput"></a>

```python
routine_input: BigqueryAnalyticsHubQueryTemplateRoutine
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `submit_input`<sup>Optional</sup> <a name="submit_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submitInput"></a>

```python
submit_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigqueryAnalyticsHubQueryTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentation"></a>

```python
documentation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `primary_contact`<sup>Required</sup> <a name="primary_contact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContact"></a>

```python
primary_contact: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `query_template_id`<sup>Required</sup> <a name="query_template_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateId"></a>

```python
query_template_id: str
```

- *Type:* str

---

##### `submit`<sup>Required</sup> <a name="submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submit"></a>

```python
submit: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubQueryTemplateConfig <a name="BigqueryAnalyticsHubQueryTemplateConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_exchange_id: str,
  display_name: str,
  location: str,
  query_template_id: str,
  deletion_policy: str = None,
  description: str = None,
  documentation: str = None,
  id: str = None,
  primary_contact: str = None,
  project: str = None,
  routine: BigqueryAnalyticsHubQueryTemplateRoutine = None,
  submit: bool | IResolvable = None,
  timeouts: BigqueryAnalyticsHubQueryTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.location">location</a></code> | <code>str</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId">query_template_id</a></code> | <code>str</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.description">description</a></code> | <code>str</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.documentation">documentation</a></code> | <code>str</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact">primary_contact</a></code> | <code>str</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.routine">routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.submit">submit</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#data_exchange_id BigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#display_name BigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#location BigqueryAnalyticsHubQueryTemplate#location}

---

##### `query_template_id`<sup>Required</sup> <a name="query_template_id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId"></a>

```python
query_template_id: str
```

- *Type:* str

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#query_template_id BigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#deletion_policy BigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#description BigqueryAnalyticsHubQueryTemplate#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.documentation"></a>

```python
documentation: str
```

- *Type:* str

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#documentation BigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primary_contact`<sup>Optional</sup> <a name="primary_contact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact"></a>

```python
primary_contact: str
```

- *Type:* str

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#primary_contact BigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}.

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.routine"></a>

```python
routine: BigqueryAnalyticsHubQueryTemplateRoutine
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#routine BigqueryAnalyticsHubQueryTemplate#routine}

---

##### `submit`<sup>Optional</sup> <a name="submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.submit"></a>

```python
submit: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#submit BigqueryAnalyticsHubQueryTemplate#submit}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.timeouts"></a>

```python
timeouts: BigqueryAnalyticsHubQueryTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#timeouts BigqueryAnalyticsHubQueryTemplate#timeouts}

---

### BigqueryAnalyticsHubQueryTemplateRoutine <a name="BigqueryAnalyticsHubQueryTemplateRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine(
  definition_body: str = None,
  routine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody">definition_body</a></code> | <code>str</code> | SQL query logic. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.routineType">routine_type</a></code> | <code>str</code> | Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]. |

---

##### `definition_body`<sup>Optional</sup> <a name="definition_body" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody"></a>

```python
definition_body: str
```

- *Type:* str

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#definition_body BigqueryAnalyticsHubQueryTemplate#definition_body}

---

##### `routine_type`<sup>Optional</sup> <a name="routine_type" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.routineType"></a>

```python
routine_type: str
```

- *Type:* str

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#routine_type BigqueryAnalyticsHubQueryTemplate#routine_type}

---

### BigqueryAnalyticsHubQueryTemplateTimeouts <a name="BigqueryAnalyticsHubQueryTemplateTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubQueryTemplateRoutineOutputReference <a name="BigqueryAnalyticsHubQueryTemplateRoutineOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody">reset_definition_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType">reset_routine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_definition_body` <a name="reset_definition_body" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody"></a>

```python
def reset_definition_body() -> None
```

##### `reset_routine_type` <a name="reset_routine_type" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType"></a>

```python
def reset_routine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput">definition_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput">routine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody">definition_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType">routine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_body_input`<sup>Optional</sup> <a name="definition_body_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput"></a>

```python
definition_body_input: str
```

- *Type:* str

---

##### `routine_type_input`<sup>Optional</sup> <a name="routine_type_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput"></a>

```python
routine_type_input: str
```

- *Type:* str

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody"></a>

```python
definition_body: str
```

- *Type:* str

---

##### `routine_type`<sup>Required</sup> <a name="routine_type" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType"></a>

```python
routine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubQueryTemplateRoutine
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---


### BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference <a name="BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_analytics_hub_query_template

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigqueryAnalyticsHubQueryTemplateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---



