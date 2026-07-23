# `contactCenterInsightsQaScorecard` Submodule <a name="`contactCenterInsightsQaScorecard` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaScorecard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaScorecard <a name="ContactCenterInsightsQaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard google_contact_center_insights_qa_scorecard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecard;

ContactCenterInsightsQaScorecard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .qaScorecardId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .source(java.lang.String)
//  .timeouts(ContactCenterInsightsQaScorecardTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.qaScorecardId">qaScorecardId</a></code> | <code>java.lang.String</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#location ContactCenterInsightsQaScorecard#location}

---

##### `qaScorecardId`<sup>Required</sup> <a name="qaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.qaScorecardId"></a>

- *Type:* java.lang.String

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#qa_scorecard_id ContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#deletion_policy ContactCenterInsightsQaScorecard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#description ContactCenterInsightsQaScorecard#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#display_name ContactCenterInsightsQaScorecard#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#is_default ContactCenterInsightsQaScorecard#is_default}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#source ContactCenterInsightsQaScorecard#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#timeouts ContactCenterInsightsQaScorecard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts"></a>

```java
public void putTimeouts(ContactCenterInsightsQaScorecardTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject"></a>

```java
public void resetProject()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource"></a>

```java
public void resetSource()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecard;

ContactCenterInsightsQaScorecard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecard;

ContactCenterInsightsQaScorecard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecard;

ContactCenterInsightsQaScorecard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecard;

ContactCenterInsightsQaScorecard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContactCenterInsightsQaScorecard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContactCenterInsightsQaScorecard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContactCenterInsightsQaScorecard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaScorecard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput">qaScorecardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId">qaScorecardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts"></a>

```java
public ContactCenterInsightsQaScorecardTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `qaScorecardIdInput`<sup>Optional</sup> <a name="qaScorecardIdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput"></a>

```java
public java.lang.String getQaScorecardIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput"></a>

```java
public IResolvable|ContactCenterInsightsQaScorecardTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `qaScorecardId`<sup>Required</sup> <a name="qaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId"></a>

```java
public java.lang.String getQaScorecardId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaScorecardConfig <a name="ContactCenterInsightsQaScorecardConfig" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecardConfig;

ContactCenterInsightsQaScorecardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .qaScorecardId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .source(java.lang.String)
//  .timeouts(ContactCenterInsightsQaScorecardTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId">qaScorecardId</a></code> | <code>java.lang.String</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description">description</a></code> | <code>java.lang.String</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source">source</a></code> | <code>java.lang.String</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#location ContactCenterInsightsQaScorecard#location}

---

##### `qaScorecardId`<sup>Required</sup> <a name="qaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId"></a>

```java
public java.lang.String getQaScorecardId();
```

- *Type:* java.lang.String

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#qa_scorecard_id ContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#deletion_policy ContactCenterInsightsQaScorecard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#description ContactCenterInsightsQaScorecard#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#display_name ContactCenterInsightsQaScorecard#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#is_default ContactCenterInsightsQaScorecard#is_default}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#source ContactCenterInsightsQaScorecard#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts"></a>

```java
public ContactCenterInsightsQaScorecardTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#timeouts ContactCenterInsightsQaScorecard#timeouts}

---

### ContactCenterInsightsQaScorecardTimeouts <a name="ContactCenterInsightsQaScorecardTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecardTimeouts;

ContactCenterInsightsQaScorecardTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaScorecardTimeoutsOutputReference <a name="ContactCenterInsightsQaScorecardTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_scorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference;

new ContactCenterInsightsQaScorecardTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContactCenterInsightsQaScorecardTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---



