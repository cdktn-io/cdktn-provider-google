# `saasRuntimeRolloutKind` Submodule <a name="`saasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google.saasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRolloutKind <a name="SaasRuntimeRolloutKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKind;

SaasRuntimeRolloutKind.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .rolloutKindId(java.lang.String)
    .unitKind(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .errorBudget(SaasRuntimeRolloutKindErrorBudget)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .rolloutOrchestrationStrategy(java.lang.String)
//  .timeouts(SaasRuntimeRolloutKindTimeouts)
//  .unitFilter(java.lang.String)
//  .updateUnitKindStrategy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutKindId">rolloutKindId</a></code> | <code>java.lang.String</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitKind">unitKind</a></code> | <code>java.lang.String</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>java.lang.String</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitFilter">unitFilter</a></code> | <code>java.lang.String</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>java.lang.String</code> | The config for updating the unit kind. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutKindId"></a>

- *Type:* java.lang.String

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitKind"></a>

- *Type:* java.lang.String

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}

---

##### `errorBudget`<sup>Optional</sup> <a name="errorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.errorBudget"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}.

---

##### `rolloutOrchestrationStrategy`<sup>Optional</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.rolloutOrchestrationStrategy"></a>

- *Type:* java.lang.String

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}

---

##### `unitFilter`<sup>Optional</sup> <a name="unitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.unitFilter"></a>

- *Type:* java.lang.String

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}

---

##### `updateUnitKindStrategy`<sup>Optional</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.updateUnitKindStrategy"></a>

- *Type:* java.lang.String

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget">putErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget">resetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">resetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter">resetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">resetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorBudget` <a name="putErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget"></a>

```java
public void putErrorBudget(SaasRuntimeRolloutKindErrorBudget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts"></a>

```java
public void putTimeouts(SaasRuntimeRolloutKindTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetErrorBudget` <a name="resetErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget"></a>

```java
public void resetErrorBudget()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject"></a>

```java
public void resetProject()
```

##### `resetRolloutOrchestrationStrategy` <a name="resetRolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```java
public void resetRolloutOrchestrationStrategy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnitFilter` <a name="resetUnitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter"></a>

```java
public void resetUnitFilter()
```

##### `resetUpdateUnitKindStrategy` <a name="resetUpdateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```java
public void resetUpdateUnitKindStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKind;

SaasRuntimeRolloutKind.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKind;

SaasRuntimeRolloutKind.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKind;

SaasRuntimeRolloutKind.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKind;

SaasRuntimeRolloutKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SaasRuntimeRolloutKind.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SaasRuntimeRolloutKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput">errorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput">rolloutKindIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">rolloutOrchestrationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput">unitFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput">unitKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">updateUnitKindStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId">rolloutKindId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter">unitFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `errorBudget`<sup>Required</sup> <a name="errorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget"></a>

```java
public SaasRuntimeRolloutKindErrorBudgetOutputReference getErrorBudget();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts"></a>

```java
public SaasRuntimeRolloutKindTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `errorBudgetInput`<sup>Optional</sup> <a name="errorBudgetInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```java
public SaasRuntimeRolloutKindErrorBudget getErrorBudgetInput();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolloutKindIdInput`<sup>Optional</sup> <a name="rolloutKindIdInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```java
public java.lang.String getRolloutKindIdInput();
```

- *Type:* java.lang.String

---

##### `rolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="rolloutOrchestrationStrategyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```java
public java.lang.String getRolloutOrchestrationStrategyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput"></a>

```java
public IResolvable|SaasRuntimeRolloutKindTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---

##### `unitFilterInput`<sup>Optional</sup> <a name="unitFilterInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput"></a>

```java
public java.lang.String getUnitFilterInput();
```

- *Type:* java.lang.String

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput"></a>

```java
public java.lang.String getUnitKindInput();
```

- *Type:* java.lang.String

---

##### `updateUnitKindStrategyInput`<sup>Optional</sup> <a name="updateUnitKindStrategyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```java
public java.lang.String getUpdateUnitKindStrategyInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId"></a>

```java
public java.lang.String getRolloutKindId();
```

- *Type:* java.lang.String

---

##### `rolloutOrchestrationStrategy`<sup>Required</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```java
public java.lang.String getRolloutOrchestrationStrategy();
```

- *Type:* java.lang.String

---

##### `unitFilter`<sup>Required</sup> <a name="unitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter"></a>

```java
public java.lang.String getUnitFilter();
```

- *Type:* java.lang.String

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

---

##### `updateUnitKindStrategy`<sup>Required</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```java
public java.lang.String getUpdateUnitKindStrategy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeRolloutKindConfig <a name="SaasRuntimeRolloutKindConfig" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKindConfig;

SaasRuntimeRolloutKindConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .rolloutKindId(java.lang.String)
    .unitKind(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .errorBudget(SaasRuntimeRolloutKindErrorBudget)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .rolloutOrchestrationStrategy(java.lang.String)
//  .timeouts(SaasRuntimeRolloutKindTimeouts)
//  .unitFilter(java.lang.String)
//  .updateUnitKindStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId">rolloutKindId</a></code> | <code>java.lang.String</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind">unitKind</a></code> | <code>java.lang.String</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>java.lang.String</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter">unitFilter</a></code> | <code>java.lang.String</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>java.lang.String</code> | The config for updating the unit kind. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```java
public java.lang.String getRolloutKindId();
```

- *Type:* java.lang.String

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind"></a>

```java
public java.lang.String getUnitKind();
```

- *Type:* java.lang.String

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}

---

##### `errorBudget`<sup>Optional</sup> <a name="errorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```java
public SaasRuntimeRolloutKindErrorBudget getErrorBudget();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}.

---

##### `rolloutOrchestrationStrategy`<sup>Optional</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```java
public java.lang.String getRolloutOrchestrationStrategy();
```

- *Type:* java.lang.String

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts"></a>

```java
public SaasRuntimeRolloutKindTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}

---

##### `unitFilter`<sup>Optional</sup> <a name="unitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```java
public java.lang.String getUnitFilter();
```

- *Type:* java.lang.String

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}

---

##### `updateUnitKindStrategy`<sup>Optional</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```java
public java.lang.String getUpdateUnitKindStrategy();
```

- *Type:* java.lang.String

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### SaasRuntimeRolloutKindErrorBudget <a name="SaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKindErrorBudget;

SaasRuntimeRolloutKindErrorBudget.builder()
//  .allowedCount(java.lang.Number)
//  .allowedPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount">allowedCount</a></code> | <code>java.lang.Number</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">allowedPercentage</a></code> | <code>java.lang.Number</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `allowedCount`<sup>Optional</sup> <a name="allowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```java
public java.lang.Number getAllowedCount();
```

- *Type:* java.lang.Number

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_count SaasRuntimeRolloutKind#allowed_count}

---

##### `allowedPercentage`<sup>Optional</sup> <a name="allowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```java
public java.lang.Number getAllowedPercentage();
```

- *Type:* java.lang.Number

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_percentage SaasRuntimeRolloutKind#allowed_percentage}

---

### SaasRuntimeRolloutKindTimeouts <a name="SaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKindTimeouts;

SaasRuntimeRolloutKindTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeRolloutKindErrorBudgetOutputReference <a name="SaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKindErrorBudgetOutputReference;

new SaasRuntimeRolloutKindErrorBudgetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">resetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">resetAllowedPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCount` <a name="resetAllowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```java
public void resetAllowedCount()
```

##### `resetAllowedPercentage` <a name="resetAllowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```java
public void resetAllowedPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">allowedCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">allowedPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">allowedCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">allowedPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedCountInput`<sup>Optional</sup> <a name="allowedCountInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```java
public java.lang.Number getAllowedCountInput();
```

- *Type:* java.lang.Number

---

##### `allowedPercentageInput`<sup>Optional</sup> <a name="allowedPercentageInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```java
public java.lang.Number getAllowedPercentageInput();
```

- *Type:* java.lang.Number

---

##### `allowedCount`<sup>Required</sup> <a name="allowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```java
public java.lang.Number getAllowedCount();
```

- *Type:* java.lang.Number

---

##### `allowedPercentage`<sup>Required</sup> <a name="allowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```java
public java.lang.Number getAllowedPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```java
public SaasRuntimeRolloutKindErrorBudget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---


### SaasRuntimeRolloutKindTimeoutsOutputReference <a name="SaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.saas_runtime_rollout_kind.SaasRuntimeRolloutKindTimeoutsOutputReference;

new SaasRuntimeRolloutKindTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SaasRuntimeRolloutKindTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---



