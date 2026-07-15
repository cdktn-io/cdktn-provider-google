# `discoveryEngineControl` Submodule <a name="`discoveryEngineControl` Submodule" id="@cdktn/provider-google.discoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineControl <a name="DiscoveryEngineControl" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControl;

DiscoveryEngineControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .controlId(java.lang.String)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .solutionType(java.lang.String)
//  .boostAction(DiscoveryEngineControlBoostAction)
//  .collectionId(java.lang.String)
//  .conditions(IResolvable|java.util.List<DiscoveryEngineControlConditions>)
//  .deletionPolicy(java.lang.String)
//  .filterAction(DiscoveryEngineControlFilterAction)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .promoteAction(DiscoveryEngineControlPromoteAction)
//  .redirectAction(DiscoveryEngineControlRedirectAction)
//  .synonymsAction(DiscoveryEngineControlSynonymsAction)
//  .timeouts(DiscoveryEngineControlTimeouts)
//  .useCases(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.controlId">controlId</a></code> | <code>java.lang.String</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.solutionType">solutionType</a></code> | <code>java.lang.String</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.controlId"></a>

- *Type:* java.lang.String

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.solutionType"></a>

- *Type:* java.lang.String

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}

---

##### `boostAction`<sup>Optional</sup> <a name="boostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.boostAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}

---

##### `filterAction`<sup>Optional</sup> <a name="filterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.filterAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}.

---

##### `promoteAction`<sup>Optional</sup> <a name="promoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.promoteAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}

---

##### `redirectAction`<sup>Optional</sup> <a name="redirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.redirectAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}

---

##### `synonymsAction`<sup>Optional</sup> <a name="synonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.synonymsAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.useCases"></a>

- *Type:* java.util.List<java.lang.String>

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction">putBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction">putFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction">putPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction">putRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction">putSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction">resetBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction">resetFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction">resetPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction">resetRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction">resetSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases">resetUseCases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBoostAction` <a name="putBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction"></a>

```java
public void putBoostAction(DiscoveryEngineControlBoostAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<DiscoveryEngineControlConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>>

---

##### `putFilterAction` <a name="putFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction"></a>

```java
public void putFilterAction(DiscoveryEngineControlFilterAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `putPromoteAction` <a name="putPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction"></a>

```java
public void putPromoteAction(DiscoveryEngineControlPromoteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `putRedirectAction` <a name="putRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction"></a>

```java
public void putRedirectAction(DiscoveryEngineControlRedirectAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `putSynonymsAction` <a name="putSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction"></a>

```java
public void putSynonymsAction(DiscoveryEngineControlSynonymsAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---

##### `resetBoostAction` <a name="resetBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction"></a>

```java
public void resetBoostAction()
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId"></a>

```java
public void resetCollectionId()
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetFilterAction` <a name="resetFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction"></a>

```java
public void resetFilterAction()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject"></a>

```java
public void resetProject()
```

##### `resetPromoteAction` <a name="resetPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction"></a>

```java
public void resetPromoteAction()
```

##### `resetRedirectAction` <a name="resetRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction"></a>

```java
public void resetRedirectAction()
```

##### `resetSynonymsAction` <a name="resetSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction"></a>

```java
public void resetSynonymsAction()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseCases` <a name="resetUseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases"></a>

```java
public void resetUseCases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControl;

DiscoveryEngineControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControl;

DiscoveryEngineControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControl;

DiscoveryEngineControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControl;

DiscoveryEngineControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput">boostActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput">controlIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput">filterActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput">promoteActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput">redirectActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput">solutionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput">synonymsActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput">useCasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId">controlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType">solutionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `boostAction`<sup>Required</sup> <a name="boostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction"></a>

```java
public DiscoveryEngineControlBoostActionOutputReference getBoostAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions"></a>

```java
public DiscoveryEngineControlConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a>

---

##### `filterAction`<sup>Required</sup> <a name="filterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction"></a>

```java
public DiscoveryEngineControlFilterActionOutputReference getFilterAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `promoteAction`<sup>Required</sup> <a name="promoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction"></a>

```java
public DiscoveryEngineControlPromoteActionOutputReference getPromoteAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `redirectAction`<sup>Required</sup> <a name="redirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction"></a>

```java
public DiscoveryEngineControlRedirectActionOutputReference getRedirectAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `synonymsAction`<sup>Required</sup> <a name="synonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction"></a>

```java
public DiscoveryEngineControlSynonymsActionOutputReference getSynonymsAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts"></a>

```java
public DiscoveryEngineControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `boostActionInput`<sup>Optional</sup> <a name="boostActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput"></a>

```java
public DiscoveryEngineControlBoostAction getBoostActionInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>>

---

##### `controlIdInput`<sup>Optional</sup> <a name="controlIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput"></a>

```java
public java.lang.String getControlIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `filterActionInput`<sup>Optional</sup> <a name="filterActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput"></a>

```java
public DiscoveryEngineControlFilterAction getFilterActionInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `promoteActionInput`<sup>Optional</sup> <a name="promoteActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput"></a>

```java
public DiscoveryEngineControlPromoteAction getPromoteActionInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `redirectActionInput`<sup>Optional</sup> <a name="redirectActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput"></a>

```java
public DiscoveryEngineControlRedirectAction getRedirectActionInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `solutionTypeInput`<sup>Optional</sup> <a name="solutionTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput"></a>

```java
public java.lang.String getSolutionTypeInput();
```

- *Type:* java.lang.String

---

##### `synonymsActionInput`<sup>Optional</sup> <a name="synonymsActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput"></a>

```java
public DiscoveryEngineControlSynonymsAction getSynonymsActionInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineControlTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---

##### `useCasesInput`<sup>Optional</sup> <a name="useCasesInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput"></a>

```java
public java.util.List<java.lang.String> getUseCasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId"></a>

```java
public java.lang.String getControlId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType"></a>

```java
public java.lang.String getSolutionType();
```

- *Type:* java.lang.String

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases"></a>

```java
public java.util.List<java.lang.String> getUseCases();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineControlBoostAction <a name="DiscoveryEngineControlBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlBoostAction;

DiscoveryEngineControlBoostAction.builder()
    .dataStore(java.lang.String)
    .filter(java.lang.String)
//  .fixedBoost(java.lang.Number)
//  .interpolationBoostSpec(DiscoveryEngineControlBoostActionInterpolationBoostSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost">fixedBoost</a></code> | <code>java.lang.Number</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec">interpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

##### `fixedBoost`<sup>Optional</sup> <a name="fixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```java
public java.lang.Number getFixedBoost();
```

- *Type:* java.lang.Number

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#fixed_boost DiscoveryEngineControl#fixed_boost}

---

##### `interpolationBoostSpec`<sup>Optional</sup> <a name="interpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpec getInterpolationBoostSpec();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#interpolation_boost_spec DiscoveryEngineControl#interpolation_boost_spec}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlBoostActionInterpolationBoostSpec;

DiscoveryEngineControlBoostActionInterpolationBoostSpec.builder()
//  .attributeType(java.lang.String)
//  .controlPoint(DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint)
//  .fieldName(java.lang.String)
//  .interpolationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">controlPoint</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">interpolationType</a></code> | <code>java.lang.String</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `attributeType`<sup>Optional</sup> <a name="attributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#attribute_type DiscoveryEngineControl#attribute_type}

---

##### `controlPoint`<sup>Optional</sup> <a name="controlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint getControlPoint();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#control_point DiscoveryEngineControl#control_point}

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#field_name DiscoveryEngineControl#field_name}

---

##### `interpolationType`<sup>Optional</sup> <a name="interpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```java
public java.lang.String getInterpolationType();
```

- *Type:* java.lang.String

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#interpolation_type DiscoveryEngineControl#interpolation_type}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint;

DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.builder()
//  .attributeValue(java.lang.String)
//  .boostAmount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">boostAmount</a></code> | <code>java.lang.Number</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#attribute_value DiscoveryEngineControl#attribute_value}

---

##### `boostAmount`<sup>Optional</sup> <a name="boostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```java
public java.lang.Number getBoostAmount();
```

- *Type:* java.lang.Number

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#boost_amount DiscoveryEngineControl#boost_amount}

---

### DiscoveryEngineControlConditions <a name="DiscoveryEngineControlConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditions;

DiscoveryEngineControlConditions.builder()
//  .activeTimeRange(IResolvable|java.util.List<DiscoveryEngineControlConditionsActiveTimeRange>)
//  .queryRegex(java.lang.String)
//  .queryTerms(IResolvable|java.util.List<DiscoveryEngineControlConditionsQueryTerms>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange">activeTimeRange</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>></code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex">queryRegex</a></code> | <code>java.lang.String</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms">queryTerms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>></code> | query_terms block. |

---

##### `activeTimeRange`<sup>Optional</sup> <a name="activeTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditionsActiveTimeRange> getActiveTimeRange();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>>

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#active_time_range DiscoveryEngineControl#active_time_range}

---

##### `queryRegex`<sup>Optional</sup> <a name="queryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex"></a>

```java
public java.lang.String getQueryRegex();
```

- *Type:* java.lang.String

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#query_regex DiscoveryEngineControl#query_regex}

---

##### `queryTerms`<sup>Optional</sup> <a name="queryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditionsQueryTerms> getQueryTerms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>>

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#query_terms DiscoveryEngineControl#query_terms}

---

### DiscoveryEngineControlConditionsActiveTimeRange <a name="DiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsActiveTimeRange;

DiscoveryEngineControlConditionsActiveTimeRange.builder()
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the active time range. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#end_time DiscoveryEngineControl#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#start_time DiscoveryEngineControl#start_time}

---

### DiscoveryEngineControlConditionsQueryTerms <a name="DiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsQueryTerms;

DiscoveryEngineControlConditionsQueryTerms.builder()
//  .fullMatch(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch">fullMatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value">value</a></code> | <code>java.lang.String</code> | The value of the query term. |

---

##### `fullMatch`<sup>Optional</sup> <a name="fullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```java
public java.lang.Boolean|IResolvable getFullMatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#full_match DiscoveryEngineControl#full_match}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#value DiscoveryEngineControl#value}

---

### DiscoveryEngineControlConfig <a name="DiscoveryEngineControlConfig" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConfig;

DiscoveryEngineControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .controlId(java.lang.String)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .solutionType(java.lang.String)
//  .boostAction(DiscoveryEngineControlBoostAction)
//  .collectionId(java.lang.String)
//  .conditions(IResolvable|java.util.List<DiscoveryEngineControlConditions>)
//  .deletionPolicy(java.lang.String)
//  .filterAction(DiscoveryEngineControlFilterAction)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .promoteAction(DiscoveryEngineControlPromoteAction)
//  .redirectAction(DiscoveryEngineControlRedirectAction)
//  .synonymsAction(DiscoveryEngineControlSynonymsAction)
//  .timeouts(DiscoveryEngineControlTimeouts)
//  .useCases(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId">controlId</a></code> | <code>java.lang.String</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType">solutionType</a></code> | <code>java.lang.String</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases">useCases</a></code> | <code>java.util.List<java.lang.String></code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId"></a>

```java
public java.lang.String getControlId();
```

- *Type:* java.lang.String

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType"></a>

```java
public java.lang.String getSolutionType();
```

- *Type:* java.lang.String

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}

---

##### `boostAction`<sup>Optional</sup> <a name="boostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction"></a>

```java
public DiscoveryEngineControlBoostAction getBoostAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}

---

##### `filterAction`<sup>Optional</sup> <a name="filterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction"></a>

```java
public DiscoveryEngineControlFilterAction getFilterAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}.

---

##### `promoteAction`<sup>Optional</sup> <a name="promoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction"></a>

```java
public DiscoveryEngineControlPromoteAction getPromoteAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}

---

##### `redirectAction`<sup>Optional</sup> <a name="redirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction"></a>

```java
public DiscoveryEngineControlRedirectAction getRedirectAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}

---

##### `synonymsAction`<sup>Optional</sup> <a name="synonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction"></a>

```java
public DiscoveryEngineControlSynonymsAction getSynonymsAction();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts"></a>

```java
public DiscoveryEngineControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases"></a>

```java
public java.util.List<java.lang.String> getUseCases();
```

- *Type:* java.util.List<java.lang.String>

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}

---

### DiscoveryEngineControlFilterAction <a name="DiscoveryEngineControlFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlFilterAction;

DiscoveryEngineControlFilterAction.builder()
    .dataStore(java.lang.String)
    .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply to the search results. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

### DiscoveryEngineControlPromoteAction <a name="DiscoveryEngineControlPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlPromoteAction;

DiscoveryEngineControlPromoteAction.builder()
    .dataStore(java.lang.String)
    .searchLinkPromotion(DiscoveryEngineControlPromoteActionSearchLinkPromotion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion">searchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `searchLinkPromotion`<sup>Required</sup> <a name="searchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```java
public DiscoveryEngineControlPromoteActionSearchLinkPromotion getSearchLinkPromotion();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#search_link_promotion DiscoveryEngineControl#search_link_promotion}

---

### DiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlPromoteActionSearchLinkPromotion;

DiscoveryEngineControlPromoteActionSearchLinkPromotion.builder()
    .title(java.lang.String)
//  .description(java.lang.String)
//  .document(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .imageUri(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">title</a></code> | <code>java.lang.String</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">description</a></code> | <code>java.lang.String</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">document</a></code> | <code>java.lang.String</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI to promote. |

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#title DiscoveryEngineControl#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#description DiscoveryEngineControl#description}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#document DiscoveryEngineControl#document}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#enabled DiscoveryEngineControl#enabled}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#image_uri DiscoveryEngineControl#image_uri}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#uri DiscoveryEngineControl#uri}

---

### DiscoveryEngineControlRedirectAction <a name="DiscoveryEngineControlRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlRedirectAction;

DiscoveryEngineControlRedirectAction.builder()
    .redirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | The URI to redirect to. |

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#redirect_uri DiscoveryEngineControl#redirect_uri}

---

### DiscoveryEngineControlSynonymsAction <a name="DiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlSynonymsAction;

DiscoveryEngineControlSynonymsAction.builder()
//  .synonyms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | The synonyms to apply to the search results. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#synonyms DiscoveryEngineControl#synonyms}

---

### DiscoveryEngineControlTimeouts <a name="DiscoveryEngineControlTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlTimeouts;

DiscoveryEngineControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference;

new DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">resetBoostAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetBoostAmount` <a name="resetBoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```java
public void resetBoostAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">boostAmountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">boostAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `boostAmountInput`<sup>Optional</sup> <a name="boostAmountInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```java
public java.lang.Number getBoostAmountInput();
```

- *Type:* java.lang.Number

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `boostAmount`<sup>Required</sup> <a name="boostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```java
public java.lang.Number getBoostAmount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference;

new DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">putControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">resetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">resetControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">resetInterpolationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPoint` <a name="putControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```java
public void putControlPoint(DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `resetAttributeType` <a name="resetAttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```java
public void resetAttributeType()
```

##### `resetControlPoint` <a name="resetControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```java
public void resetControlPoint()
```

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```java
public void resetFieldName()
```

##### `resetInterpolationType` <a name="resetInterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```java
public void resetInterpolationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">controlPoint</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">controlPointInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">interpolationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">attributeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">interpolationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlPoint`<sup>Required</sup> <a name="controlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference getControlPoint();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```java
public java.lang.String getAttributeTypeInput();
```

- *Type:* java.lang.String

---

##### `controlPointInput`<sup>Optional</sup> <a name="controlPointInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint getControlPointInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `interpolationTypeInput`<sup>Optional</sup> <a name="interpolationTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```java
public java.lang.String getInterpolationTypeInput();
```

- *Type:* java.lang.String

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```java
public java.lang.String getAttributeType();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `interpolationType`<sup>Required</sup> <a name="interpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```java
public java.lang.String getInterpolationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### DiscoveryEngineControlBoostActionOutputReference <a name="DiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlBoostActionOutputReference;

new DiscoveryEngineControlBoostActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">putInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">resetFixedBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">resetInterpolationBoostSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterpolationBoostSpec` <a name="putInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```java
public void putInterpolationBoostSpec(DiscoveryEngineControlBoostActionInterpolationBoostSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `resetFixedBoost` <a name="resetFixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```java
public void resetFixedBoost()
```

##### `resetInterpolationBoostSpec` <a name="resetInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```java
public void resetInterpolationBoostSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">interpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">fixedBoostInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">interpolationBoostSpecInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">fixedBoost</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interpolationBoostSpec`<sup>Required</sup> <a name="interpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference getInterpolationBoostSpec();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `fixedBoostInput`<sup>Optional</sup> <a name="fixedBoostInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```java
public java.lang.Number getFixedBoostInput();
```

- *Type:* java.lang.Number

---

##### `interpolationBoostSpecInput`<sup>Optional</sup> <a name="interpolationBoostSpecInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```java
public DiscoveryEngineControlBoostActionInterpolationBoostSpec getInterpolationBoostSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `fixedBoost`<sup>Required</sup> <a name="fixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```java
public java.lang.Number getFixedBoost();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlBoostAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---


### DiscoveryEngineControlConditionsActiveTimeRangeList <a name="DiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsActiveTimeRangeList;

new DiscoveryEngineControlConditionsActiveTimeRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```java
public DiscoveryEngineControlConditionsActiveTimeRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditionsActiveTimeRange> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>>

---


### DiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="DiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference;

new DiscoveryEngineControlConditionsActiveTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineControlConditionsActiveTimeRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>

---


### DiscoveryEngineControlConditionsList <a name="DiscoveryEngineControlConditionsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsList;

new DiscoveryEngineControlConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get"></a>

```java
public DiscoveryEngineControlConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>>

---


### DiscoveryEngineControlConditionsOutputReference <a name="DiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsOutputReference;

new DiscoveryEngineControlConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">putActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms">putQueryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">resetActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex">resetQueryRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms">resetQueryTerms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveTimeRange` <a name="putActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```java
public void putActiveTimeRange(IResolvable|java.util.List<DiscoveryEngineControlConditionsActiveTimeRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>>

---

##### `putQueryTerms` <a name="putQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```java
public void putQueryTerms(IResolvable|java.util.List<DiscoveryEngineControlConditionsQueryTerms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>>

---

##### `resetActiveTimeRange` <a name="resetActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```java
public void resetActiveTimeRange()
```

##### `resetQueryRegex` <a name="resetQueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```java
public void resetQueryRegex()
```

##### `resetQueryTerms` <a name="resetQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```java
public void resetQueryTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">activeTimeRange</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms">queryTerms</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">activeTimeRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">queryRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">queryTermsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex">queryRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeTimeRange`<sup>Required</sup> <a name="activeTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```java
public DiscoveryEngineControlConditionsActiveTimeRangeList getActiveTimeRange();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `queryTerms`<sup>Required</sup> <a name="queryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```java
public DiscoveryEngineControlConditionsQueryTermsList getQueryTerms();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `activeTimeRangeInput`<sup>Optional</sup> <a name="activeTimeRangeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditionsActiveTimeRange> getActiveTimeRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>>

---

##### `queryRegexInput`<sup>Optional</sup> <a name="queryRegexInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```java
public java.lang.String getQueryRegexInput();
```

- *Type:* java.lang.String

---

##### `queryTermsInput`<sup>Optional</sup> <a name="queryTermsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditionsQueryTerms> getQueryTermsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>>

---

##### `queryRegex`<sup>Required</sup> <a name="queryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```java
public java.lang.String getQueryRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineControlConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>

---


### DiscoveryEngineControlConditionsQueryTermsList <a name="DiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsQueryTermsList;

new DiscoveryEngineControlConditionsQueryTermsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get"></a>

```java
public DiscoveryEngineControlConditionsQueryTermsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineControlConditionsQueryTerms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>>

---


### DiscoveryEngineControlConditionsQueryTermsOutputReference <a name="DiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlConditionsQueryTermsOutputReference;

new DiscoveryEngineControlConditionsQueryTermsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">resetFullMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullMatch` <a name="resetFullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```java
public void resetFullMatch()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">fullMatchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">fullMatch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fullMatchInput`<sup>Optional</sup> <a name="fullMatchInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```java
public java.lang.Boolean|IResolvable getFullMatchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `fullMatch`<sup>Required</sup> <a name="fullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```java
public java.lang.Boolean|IResolvable getFullMatch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineControlConditionsQueryTerms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>

---


### DiscoveryEngineControlFilterActionOutputReference <a name="DiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlFilterActionOutputReference;

new DiscoveryEngineControlFilterActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlFilterAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---


### DiscoveryEngineControlPromoteActionOutputReference <a name="DiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlPromoteActionOutputReference;

new DiscoveryEngineControlPromoteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">putSearchLinkPromotion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSearchLinkPromotion` <a name="putSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```java
public void putSearchLinkPromotion(DiscoveryEngineControlPromoteActionSearchLinkPromotion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">searchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">searchLinkPromotionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `searchLinkPromotion`<sup>Required</sup> <a name="searchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```java
public DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference getSearchLinkPromotion();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```java
public java.lang.String getDataStoreInput();
```

- *Type:* java.lang.String

---

##### `searchLinkPromotionInput`<sup>Optional</sup> <a name="searchLinkPromotionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```java
public DiscoveryEngineControlPromoteActionSearchLinkPromotion getSearchLinkPromotionInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlPromoteAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---


### DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference;

new DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```java
public void resetDocument()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">documentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">document</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```java
public java.lang.String getDocumentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```java
public java.lang.String getDocument();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlPromoteActionSearchLinkPromotion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### DiscoveryEngineControlRedirectActionOutputReference <a name="DiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlRedirectActionOutputReference;

new DiscoveryEngineControlRedirectActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```java
public java.lang.String getRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlRedirectAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---


### DiscoveryEngineControlSynonymsActionOutputReference <a name="DiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlSynonymsActionOutputReference;

new DiscoveryEngineControlSynonymsActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineControlSynonymsAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---


### DiscoveryEngineControlTimeoutsOutputReference <a name="DiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_control.DiscoveryEngineControlTimeoutsOutputReference;

new DiscoveryEngineControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineControlTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---



