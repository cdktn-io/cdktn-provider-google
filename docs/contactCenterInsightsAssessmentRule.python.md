# `contactCenterInsightsAssessmentRule` Submodule <a name="`contactCenterInsightsAssessmentRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAssessmentRule <a name="ContactCenterInsightsAssessmentRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule(
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
  active: bool | IResolvable = None,
  assessment_rule_id: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  sample_rule: ContactCenterInsightsAssessmentRuleSampleRule = None,
  schedule_info: ContactCenterInsightsAssessmentRuleScheduleInfo = None,
  timeouts: ContactCenterInsightsAssessmentRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.assessmentRuleId">assessment_rule_id</a></code> | <code>str</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.sampleRule">sample_rule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scheduleInfo">schedule_info</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#location ContactCenterInsightsAssessmentRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#active ContactCenterInsightsAssessmentRule#active}

---

##### `assessment_rule_id`<sup>Optional</sup> <a name="assessment_rule_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.assessmentRuleId"></a>

- *Type:* str

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#assessment_rule_id ContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#deletion_policy ContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.displayName"></a>

- *Type:* str

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#display_name ContactCenterInsightsAssessmentRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}.

---

##### `sample_rule`<sup>Optional</sup> <a name="sample_rule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.sampleRule"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#sample_rule ContactCenterInsightsAssessmentRule#sample_rule}

---

##### `schedule_info`<sup>Optional</sup> <a name="schedule_info" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scheduleInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#schedule_info ContactCenterInsightsAssessmentRule#schedule_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#timeouts ContactCenterInsightsAssessmentRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule">put_sample_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo">put_schedule_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetAssessmentRuleId">reset_assessment_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetSampleRule">reset_sample_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetScheduleInfo">reset_schedule_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sample_rule` <a name="put_sample_rule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule"></a>

```python
def put_sample_rule(
  conversation_filter: str = None,
  dimension: str = None,
  sample_percentage: typing.Union[int, float] = None,
  sample_row: typing.Union[int, float] = None
) -> None
```

###### `conversation_filter`<sup>Optional</sup> <a name="conversation_filter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule.parameter.conversationFilter"></a>

- *Type:* str

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#conversation_filter ContactCenterInsightsAssessmentRule#conversation_filter}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule.parameter.dimension"></a>

- *Type:* str

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#dimension ContactCenterInsightsAssessmentRule#dimension}

---

###### `sample_percentage`<sup>Optional</sup> <a name="sample_percentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule.parameter.samplePercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#sample_percentage ContactCenterInsightsAssessmentRule#sample_percentage}

---

###### `sample_row`<sup>Optional</sup> <a name="sample_row" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule.parameter.sampleRow"></a>

- *Type:* typing.Union[int, float]

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#sample_row ContactCenterInsightsAssessmentRule#sample_row}

---

##### `put_schedule_info` <a name="put_schedule_info" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo"></a>

```python
def put_schedule_info(
  end_time: str = None,
  schedule: str = None,
  start_time: str = None,
  time_zone: str = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.endTime"></a>

- *Type:* str

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#end_time ContactCenterInsightsAssessmentRule#end_time}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.schedule"></a>

- *Type:* str

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#schedule ContactCenterInsightsAssessmentRule#schedule}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.startTime"></a>

- *Type:* str

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#start_time ContactCenterInsightsAssessmentRule#start_time}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.timeZone"></a>

- *Type:* str

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#time_zone ContactCenterInsightsAssessmentRule#time_zone}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_assessment_rule_id` <a name="reset_assessment_rule_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetAssessmentRuleId"></a>

```python
def reset_assessment_rule_id() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sample_rule` <a name="reset_sample_rule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetSampleRule"></a>

```python
def reset_sample_rule() -> None
```

##### `reset_schedule_info` <a name="reset_schedule_info" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetScheduleInfo"></a>

```python
def reset_schedule_info() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContactCenterInsightsAssessmentRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContactCenterInsightsAssessmentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAssessmentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRule">sample_rule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference">ContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfo">schedule_info</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference">ContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput">assessment_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRuleInput">sample_rule_input</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfoInput">schedule_info_input</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleId">assessment_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sample_rule`<sup>Required</sup> <a name="sample_rule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRule"></a>

```python
sample_rule: ContactCenterInsightsAssessmentRuleSampleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference">ContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a>

---

##### `schedule_info`<sup>Required</sup> <a name="schedule_info" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfo"></a>

```python
schedule_info: ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsAssessmentRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference">ContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `assessment_rule_id_input`<sup>Optional</sup> <a name="assessment_rule_id_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput"></a>

```python
assessment_rule_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sample_rule_input`<sup>Optional</sup> <a name="sample_rule_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRuleInput"></a>

```python
sample_rule_input: ContactCenterInsightsAssessmentRuleSampleRule
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `schedule_info_input`<sup>Optional</sup> <a name="schedule_info_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfoInput"></a>

```python
schedule_info_input: ContactCenterInsightsAssessmentRuleScheduleInfo
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContactCenterInsightsAssessmentRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `assessment_rule_id`<sup>Required</sup> <a name="assessment_rule_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleId"></a>

```python
assessment_rule_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAssessmentRuleConfig <a name="ContactCenterInsightsAssessmentRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  active: bool | IResolvable = None,
  assessment_rule_id: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  sample_rule: ContactCenterInsightsAssessmentRuleSampleRule = None,
  schedule_info: ContactCenterInsightsAssessmentRuleScheduleInfo = None,
  timeouts: ContactCenterInsightsAssessmentRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId">assessment_rule_id</a></code> | <code>str</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.sampleRule">sample_rule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo">schedule_info</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#location ContactCenterInsightsAssessmentRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#active ContactCenterInsightsAssessmentRule#active}

---

##### `assessment_rule_id`<sup>Optional</sup> <a name="assessment_rule_id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId"></a>

```python
assessment_rule_id: str
```

- *Type:* str

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#assessment_rule_id ContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#deletion_policy ContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#display_name ContactCenterInsightsAssessmentRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}.

---

##### `sample_rule`<sup>Optional</sup> <a name="sample_rule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.sampleRule"></a>

```python
sample_rule: ContactCenterInsightsAssessmentRuleSampleRule
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#sample_rule ContactCenterInsightsAssessmentRule#sample_rule}

---

##### `schedule_info`<sup>Optional</sup> <a name="schedule_info" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo"></a>

```python
schedule_info: ContactCenterInsightsAssessmentRuleScheduleInfo
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#schedule_info ContactCenterInsightsAssessmentRule#schedule_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsAssessmentRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#timeouts ContactCenterInsightsAssessmentRule#timeouts}

---

### ContactCenterInsightsAssessmentRuleSampleRule <a name="ContactCenterInsightsAssessmentRuleSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule(
  conversation_filter: str = None,
  dimension: str = None,
  sample_percentage: typing.Union[int, float] = None,
  sample_row: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter">conversation_filter</a></code> | <code>str</code> | To specify the filter for the conversions that should apply this sample rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.dimension">dimension</a></code> | <code>str</code> | Group by dimension to sample the conversation. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage">sample_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of conversations that we should sample  based on the dimension between [0, 100]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow">sample_row</a></code> | <code>typing.Union[int, float]</code> | Number of the conversations that we should sample based on the dimension. |

---

##### `conversation_filter`<sup>Optional</sup> <a name="conversation_filter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter"></a>

```python
conversation_filter: str
```

- *Type:* str

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#conversation_filter ContactCenterInsightsAssessmentRule#conversation_filter}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#dimension ContactCenterInsightsAssessmentRule#dimension}

---

##### `sample_percentage`<sup>Optional</sup> <a name="sample_percentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage"></a>

```python
sample_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#sample_percentage ContactCenterInsightsAssessmentRule#sample_percentage}

---

##### `sample_row`<sup>Optional</sup> <a name="sample_row" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow"></a>

```python
sample_row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#sample_row ContactCenterInsightsAssessmentRule#sample_row}

---

### ContactCenterInsightsAssessmentRuleScheduleInfo <a name="ContactCenterInsightsAssessmentRuleScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo(
  end_time: str = None,
  schedule: str = None,
  start_time: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime">end_time</a></code> | <code>str</code> | End time of the schedule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule">schedule</a></code> | <code>str</code> | The groc expression. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime">start_time</a></code> | <code>str</code> | Start time of the schedule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone">time_zone</a></code> | <code>str</code> | The timezone to use for the groc expression. If not specified, defaults to UTC. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#end_time ContactCenterInsightsAssessmentRule#end_time}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#schedule ContactCenterInsightsAssessmentRule#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#start_time ContactCenterInsightsAssessmentRule#start_time}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#time_zone ContactCenterInsightsAssessmentRule#time_zone}

---

### ContactCenterInsightsAssessmentRuleTimeouts <a name="ContactCenterInsightsAssessmentRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAssessmentRuleSampleRuleOutputReference <a name="ContactCenterInsightsAssessmentRuleSampleRuleOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter">reset_conversation_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage">reset_sample_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow">reset_sample_row</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_conversation_filter` <a name="reset_conversation_filter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter"></a>

```python
def reset_conversation_filter() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_sample_percentage` <a name="reset_sample_percentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage"></a>

```python
def reset_sample_percentage() -> None
```

##### `reset_sample_row` <a name="reset_sample_row" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow"></a>

```python
def reset_sample_row() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput">conversation_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput">dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput">sample_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput">sample_row_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter">conversation_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage">sample_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow">sample_row</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_filter_input`<sup>Optional</sup> <a name="conversation_filter_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput"></a>

```python
conversation_filter_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput"></a>

```python
dimension_input: str
```

- *Type:* str

---

##### `sample_percentage_input`<sup>Optional</sup> <a name="sample_percentage_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput"></a>

```python
sample_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_row_input`<sup>Optional</sup> <a name="sample_row_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput"></a>

```python
sample_row_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conversation_filter`<sup>Required</sup> <a name="conversation_filter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter"></a>

```python
conversation_filter: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `sample_percentage`<sup>Required</sup> <a name="sample_percentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage"></a>

```python
sample_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_row`<sup>Required</sup> <a name="sample_row" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow"></a>

```python
sample_row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsAssessmentRuleSampleRule
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---


### ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference <a name="ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsAssessmentRuleScheduleInfo
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---


### ContactCenterInsightsAssessmentRuleTimeoutsOutputReference <a name="ContactCenterInsightsAssessmentRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_assessment_rule

contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContactCenterInsightsAssessmentRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

---



