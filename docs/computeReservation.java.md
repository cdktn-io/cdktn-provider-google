# `computeReservation` Submodule <a name="`computeReservation` Submodule" id="@cdktn/provider-google.computeReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeReservation <a name="ComputeReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation google_compute_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservation;

ComputeReservation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .specificReservation(ComputeReservationSpecificReservation)
    .zone(java.lang.String)
//  .deleteAfterDuration(ComputeReservationDeleteAfterDuration)
//  .deleteAtTime(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .params(ComputeReservationParams)
//  .project(java.lang.String)
//  .reservationSharingPolicy(ComputeReservationReservationSharingPolicy)
//  .shareSettings(ComputeReservationShareSettings)
//  .specificReservationRequired(java.lang.Boolean|IResolvable)
//  .timeouts(ComputeReservationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.specificReservation">specificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | specific_reservation block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone where the reservation is made. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.deleteAfterDuration">deleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | delete_after_duration block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.deleteAtTime">deleteAtTime</a></code> | <code>java.lang.String</code> | Absolute time in future when the reservation will be auto-deleted by Compute Engine. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project ComputeReservation#project}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.reservationSharingPolicy">reservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | reservation_sharing_policy block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.shareSettings">shareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.specificReservationRequired">specificReservationRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, only VMs that target this reservation by name can consume this reservation. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#name ComputeReservation#name}

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.specificReservation"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#specific_reservation ComputeReservation#specific_reservation}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone where the reservation is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#zone ComputeReservation#zone}

---

##### `deleteAfterDuration`<sup>Optional</sup> <a name="deleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.deleteAfterDuration"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

delete_after_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete_after_duration ComputeReservation#delete_after_duration}

---

##### `deleteAtTime`<sup>Optional</sup> <a name="deleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.deleteAtTime"></a>

- *Type:* java.lang.String

Absolute time in future when the reservation will be auto-deleted by Compute Engine.

Timestamp is represented in RFC3339 text format.
Cannot be used with delete_after_duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete_at_time ComputeReservation#delete_at_time}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#deletion_policy ComputeReservation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#description ComputeReservation#description}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#params ComputeReservation#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project ComputeReservation#project}.

---

##### `reservationSharingPolicy`<sup>Optional</sup> <a name="reservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.reservationSharingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

reservation_sharing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#reservation_sharing_policy ComputeReservation#reservation_sharing_policy}

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.shareSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#share_settings ComputeReservation#share_settings}

---

##### `specificReservationRequired`<sup>Optional</sup> <a name="specificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.specificReservationRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, only VMs that target this reservation by name can consume this reservation.

Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#specific_reservation_required ComputeReservation#specific_reservation_required}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#timeouts ComputeReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration">putDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy">putReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings">putShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAfterDuration">resetDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAtTime">resetDeleteAtTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetReservationSharingPolicy">resetReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetShareSettings">resetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetSpecificReservationRequired">resetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeReservation.ComputeReservation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeReservation.ComputeReservation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeReservation.ComputeReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeReservation.ComputeReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeReservation.ComputeReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeReservation.ComputeReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeleteAfterDuration` <a name="putDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration"></a>

```java
public void putDeleteAfterDuration(ComputeReservationDeleteAfterDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeReservation.ComputeReservation.putParams"></a>

```java
public void putParams(ComputeReservationParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---

##### `putReservationSharingPolicy` <a name="putReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy"></a>

```java
public void putReservationSharingPolicy(ComputeReservationReservationSharingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---

##### `putShareSettings` <a name="putShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings"></a>

```java
public void putShareSettings(ComputeReservationShareSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation"></a>

```java
public void putSpecificReservation(ComputeReservationSpecificReservation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts"></a>

```java
public void putTimeouts(ComputeReservationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---

##### `resetDeleteAfterDuration` <a name="resetDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAfterDuration"></a>

```java
public void resetDeleteAfterDuration()
```

##### `resetDeleteAtTime` <a name="resetDeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAtTime"></a>

```java
public void resetDeleteAtTime()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetProject"></a>

```java
public void resetProject()
```

##### `resetReservationSharingPolicy` <a name="resetReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetReservationSharingPolicy"></a>

```java
public void resetReservationSharingPolicy()
```

##### `resetShareSettings` <a name="resetShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetShareSettings"></a>

```java
public void resetShareSettings()
```

##### `resetSpecificReservationRequired` <a name="resetSpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetSpecificReservationRequired"></a>

```java
public void resetSpecificReservationRequired()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservation;

ComputeReservation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservation;

ComputeReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservation;

ComputeReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservation;

ComputeReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.blockNames">blockNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.commitment">commitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDuration">deleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference">ComputeReservationDeleteAfterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.linkedCommitments">linkedCommitments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference">ComputeReservationParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationBlockCount">reservationBlockCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicy">reservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference">ComputeReservationReservationSharingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.resourceStatus">resourceStatus</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList">ComputeReservationResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.satisfiesPzs">satisfiesPzs</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference">ComputeReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference">ComputeReservationSpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference">ComputeReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDurationInput">deleteAfterDurationInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTimeInput">deleteAtTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicyInput">reservationSharingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettingsInput">shareSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequiredInput">specificReservationRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTime">deleteAtTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequired">specificReservationRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `blockNames`<sup>Required</sup> <a name="blockNames" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.blockNames"></a>

```java
public java.util.List<java.lang.String> getBlockNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.commitment"></a>

```java
public java.lang.String getCommitment();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `deleteAfterDuration`<sup>Required</sup> <a name="deleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDuration"></a>

```java
public ComputeReservationDeleteAfterDurationOutputReference getDeleteAfterDuration();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference">ComputeReservationDeleteAfterDurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `linkedCommitments`<sup>Required</sup> <a name="linkedCommitments" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.linkedCommitments"></a>

```java
public java.util.List<java.lang.String> getLinkedCommitments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.params"></a>

```java
public ComputeReservationParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference">ComputeReservationParamsOutputReference</a>

---

##### `reservationBlockCount`<sup>Required</sup> <a name="reservationBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationBlockCount"></a>

```java
public java.lang.Number getReservationBlockCount();
```

- *Type:* java.lang.Number

---

##### `reservationSharingPolicy`<sup>Required</sup> <a name="reservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicy"></a>

```java
public ComputeReservationReservationSharingPolicyOutputReference getReservationSharingPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference">ComputeReservationReservationSharingPolicyOutputReference</a>

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.resourceStatus"></a>

```java
public ComputeReservationResourceStatusList getResourceStatus();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList">ComputeReservationResourceStatusList</a>

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.satisfiesPzs"></a>

```java
public IResolvable getSatisfiesPzs();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettings"></a>

```java
public ComputeReservationShareSettingsOutputReference getShareSettings();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference">ComputeReservationShareSettingsOutputReference</a>

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservation"></a>

```java
public ComputeReservationSpecificReservationOutputReference getSpecificReservation();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference">ComputeReservationSpecificReservationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.timeouts"></a>

```java
public ComputeReservationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference">ComputeReservationTimeoutsOutputReference</a>

---

##### `deleteAfterDurationInput`<sup>Optional</sup> <a name="deleteAfterDurationInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDurationInput"></a>

```java
public ComputeReservationDeleteAfterDuration getDeleteAfterDurationInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---

##### `deleteAtTimeInput`<sup>Optional</sup> <a name="deleteAtTimeInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTimeInput"></a>

```java
public java.lang.String getDeleteAtTimeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.paramsInput"></a>

```java
public ComputeReservationParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservationSharingPolicyInput`<sup>Optional</sup> <a name="reservationSharingPolicyInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicyInput"></a>

```java
public ComputeReservationReservationSharingPolicy getReservationSharingPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---

##### `shareSettingsInput`<sup>Optional</sup> <a name="shareSettingsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettingsInput"></a>

```java
public ComputeReservationShareSettings getShareSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationInput"></a>

```java
public ComputeReservationSpecificReservation getSpecificReservationInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---

##### `specificReservationRequiredInput`<sup>Optional</sup> <a name="specificReservationRequiredInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getSpecificReservationRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.timeoutsInput"></a>

```java
public IResolvable|ComputeReservationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `deleteAtTime`<sup>Required</sup> <a name="deleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTime"></a>

```java
public java.lang.String getDeleteAtTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `specificReservationRequired`<sup>Required</sup> <a name="specificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequired"></a>

```java
public java.lang.Boolean|IResolvable getSpecificReservationRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeReservationConfig <a name="ComputeReservationConfig" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationConfig;

ComputeReservationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .specificReservation(ComputeReservationSpecificReservation)
    .zone(java.lang.String)
//  .deleteAfterDuration(ComputeReservationDeleteAfterDuration)
//  .deleteAtTime(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .params(ComputeReservationParams)
//  .project(java.lang.String)
//  .reservationSharingPolicy(ComputeReservationReservationSharingPolicy)
//  .shareSettings(ComputeReservationShareSettings)
//  .specificReservationRequired(java.lang.Boolean|IResolvable)
//  .timeouts(ComputeReservationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | specific_reservation block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone where the reservation is made. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAfterDuration">deleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | delete_after_duration block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAtTime">deleteAtTime</a></code> | <code>java.lang.String</code> | Absolute time in future when the reservation will be auto-deleted by Compute Engine. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project ComputeReservation#project}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.reservationSharingPolicy">reservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | reservation_sharing_policy block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservationRequired">specificReservationRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, only VMs that target this reservation by name can consume this reservation. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#name ComputeReservation#name}

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservation"></a>

```java
public ComputeReservationSpecificReservation getSpecificReservation();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#specific_reservation ComputeReservation#specific_reservation}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone where the reservation is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#zone ComputeReservation#zone}

---

##### `deleteAfterDuration`<sup>Optional</sup> <a name="deleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAfterDuration"></a>

```java
public ComputeReservationDeleteAfterDuration getDeleteAfterDuration();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

delete_after_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete_after_duration ComputeReservation#delete_after_duration}

---

##### `deleteAtTime`<sup>Optional</sup> <a name="deleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAtTime"></a>

```java
public java.lang.String getDeleteAtTime();
```

- *Type:* java.lang.String

Absolute time in future when the reservation will be auto-deleted by Compute Engine.

Timestamp is represented in RFC3339 text format.
Cannot be used with delete_after_duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete_at_time ComputeReservation#delete_at_time}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#deletion_policy ComputeReservation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#description ComputeReservation#description}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.params"></a>

```java
public ComputeReservationParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#params ComputeReservation#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project ComputeReservation#project}.

---

##### `reservationSharingPolicy`<sup>Optional</sup> <a name="reservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.reservationSharingPolicy"></a>

```java
public ComputeReservationReservationSharingPolicy getReservationSharingPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

reservation_sharing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#reservation_sharing_policy ComputeReservation#reservation_sharing_policy}

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.shareSettings"></a>

```java
public ComputeReservationShareSettings getShareSettings();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#share_settings ComputeReservation#share_settings}

---

##### `specificReservationRequired`<sup>Optional</sup> <a name="specificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservationRequired"></a>

```java
public java.lang.Boolean|IResolvable getSpecificReservationRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, only VMs that target this reservation by name can consume this reservation.

Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#specific_reservation_required ComputeReservation#specific_reservation_required}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.timeouts"></a>

```java
public ComputeReservationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#timeouts ComputeReservation#timeouts}

---

### ComputeReservationDeleteAfterDuration <a name="ComputeReservationDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationDeleteAfterDuration;

ComputeReservationDeleteAfterDuration.builder()
//  .nanos(java.lang.Number)
//  .seconds(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Number of nanoseconds for the auto-delete duration. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.seconds">seconds</a></code> | <code>java.lang.String</code> | Number of seconds for the auto-delete duration. |

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Number of nanoseconds for the auto-delete duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#nanos ComputeReservation#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

Number of seconds for the auto-delete duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#seconds ComputeReservation#seconds}

---

### ComputeReservationParams <a name="ComputeReservationParams" id="@cdktn/provider-google.computeReservation.ComputeReservationParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationParams.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationParams;

ComputeReservationParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the reservation. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the reservation.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#resource_manager_tags ComputeReservation#resource_manager_tags}

---

### ComputeReservationReservationSharingPolicy <a name="ComputeReservationReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationReservationSharingPolicy;

ComputeReservationReservationSharingPolicy.builder()
//  .serviceShareType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.property.serviceShareType">serviceShareType</a></code> | <code>java.lang.String</code> | Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"]. |

---

##### `serviceShareType`<sup>Optional</sup> <a name="serviceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.property.serviceShareType"></a>

```java
public java.lang.String getServiceShareType();
```

- *Type:* java.lang.String

Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#service_share_type ComputeReservation#service_share_type}

---

### ComputeReservationResourceStatus <a name="ComputeReservationResourceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatus;

ComputeReservationResourceStatus.builder()
    .build();
```


### ComputeReservationResourceStatusHealthInfo <a name="ComputeReservationResourceStatusHealthInfo" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusHealthInfo;

ComputeReservationResourceStatusHealthInfo.builder()
    .build();
```


### ComputeReservationResourceStatusReservationMaintenance <a name="ComputeReservationResourceStatusReservationMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusReservationMaintenance;

ComputeReservationResourceStatusReservationMaintenance.builder()
    .build();
```


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance;

ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance.builder()
    .build();
```


### ComputeReservationResourceStatusSpecificSkuAllocation <a name="ComputeReservationResourceStatusSpecificSkuAllocation" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusSpecificSkuAllocation;

ComputeReservationResourceStatusSpecificSkuAllocation.builder()
    .build();
```


### ComputeReservationShareSettings <a name="ComputeReservationShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationShareSettings;

ComputeReservationShareSettings.builder()
//  .projectMap(IResolvable|java.util.List<ComputeReservationShareSettingsProjectMap>)
//  .shareType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.projectMap">projectMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>></code> | project_map block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.shareType">shareType</a></code> | <code>java.lang.String</code> | Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `projectMap`<sup>Optional</sup> <a name="projectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.projectMap"></a>

```java
public IResolvable|java.util.List<ComputeReservationShareSettingsProjectMap> getProjectMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>>

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project_map ComputeReservation#project_map}

---

##### `shareType`<sup>Optional</sup> <a name="shareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#share_type ComputeReservation#share_type}

---

### ComputeReservationShareSettingsProjectMap <a name="ComputeReservationShareSettingsProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationShareSettingsProjectMap;

ComputeReservationShareSettingsProjectMap.builder()
    .id(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#id ComputeReservation#id}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project id/number, should be same as the key of this project config in the project map. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#id ComputeReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project id/number, should be same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project_id ComputeReservation#project_id}

---

### ComputeReservationSpecificReservation <a name="ComputeReservationSpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservation;

ComputeReservationSpecificReservation.builder()
    .count(java.lang.Number)
//  .instanceProperties(ComputeReservationSpecificReservationInstanceProperties)
//  .sourceInstanceTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.count">count</a></code> | <code>java.lang.Number</code> | The number of resources that are allocated. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>java.lang.String</code> | Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of resources that are allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#count ComputeReservation#count}

---

##### `instanceProperties`<sup>Optional</sup> <a name="instanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.instanceProperties"></a>

```java
public ComputeReservationSpecificReservationInstanceProperties getInstanceProperties();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#instance_properties ComputeReservation#instance_properties}

---

##### `sourceInstanceTemplate`<sup>Optional</sup> <a name="sourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.sourceInstanceTemplate"></a>

```java
public java.lang.String getSourceInstanceTemplate();
```

- *Type:* java.lang.String

Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#source_instance_template ComputeReservation#source_instance_template}

---

### ComputeReservationSpecificReservationInstanceProperties <a name="ComputeReservationSpecificReservationInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstanceProperties;

ComputeReservationSpecificReservationInstanceProperties.builder()
    .machineType(java.lang.String)
//  .guestAccelerators(IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators>)
//  .localSsds(IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesLocalSsds>)
//  .minCpuPlatform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The name of the machine type to reserve. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators">guestAccelerators</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>></code> | guest_accelerators block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.localSsds">localSsds</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>></code> | local_ssds block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | The minimum CPU platform for the reservation. |

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The name of the machine type to reserve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#machine_type ComputeReservation#machine_type}

---

##### `guestAccelerators`<sup>Optional</sup> <a name="guestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators"></a>

```java
public IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators> getGuestAccelerators();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>>

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#guest_accelerators ComputeReservation#guest_accelerators}

---

##### `localSsds`<sup>Optional</sup> <a name="localSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.localSsds"></a>

```java
public IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesLocalSsds> getLocalSsds();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>>

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#local_ssds ComputeReservation#local_ssds}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

The minimum CPU platform for the reservation.

For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#min_cpu_platform ComputeReservation#min_cpu_platform}

---

### ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators;

ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.builder()
    .acceleratorCount(java.lang.Number)
    .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'. |

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#accelerator_count ComputeReservation#accelerator_count}

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'.

If you are creating an instance template, specify only the accelerator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#accelerator_type ComputeReservation#accelerator_type}

---

### ComputeReservationSpecificReservationInstancePropertiesLocalSsds <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds;

ComputeReservationSpecificReservationInstancePropertiesLocalSsds.builder()
    .diskSizeGb(java.lang.Number)
//  .interface(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the disk in base-2 GB. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface">interface</a></code> | <code>java.lang.String</code> | The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]. |

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

The size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#disk_size_gb ComputeReservation#disk_size_gb}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#interface ComputeReservation#interface}

---

### ComputeReservationTimeouts <a name="ComputeReservationTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationTimeouts;

ComputeReservationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#create ComputeReservation#create}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete ComputeReservation#delete}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#update ComputeReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#create ComputeReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete ComputeReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#update ComputeReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeReservationDeleteAfterDurationOutputReference <a name="ComputeReservationDeleteAfterDurationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationDeleteAfterDurationOutputReference;

new ComputeReservationDeleteAfterDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.String getSecondsInput();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.internalValue"></a>

```java
public ComputeReservationDeleteAfterDuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---


### ComputeReservationParamsOutputReference <a name="ComputeReservationParamsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationParamsOutputReference;

new ComputeReservationParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.internalValue"></a>

```java
public ComputeReservationParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---


### ComputeReservationReservationSharingPolicyOutputReference <a name="ComputeReservationReservationSharingPolicyOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationReservationSharingPolicyOutputReference;

new ComputeReservationReservationSharingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resetServiceShareType">resetServiceShareType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceShareType` <a name="resetServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resetServiceShareType"></a>

```java
public void resetServiceShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareTypeInput">serviceShareTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType">serviceShareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceShareTypeInput`<sup>Optional</sup> <a name="serviceShareTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareTypeInput"></a>

```java
public java.lang.String getServiceShareTypeInput();
```

- *Type:* java.lang.String

---

##### `serviceShareType`<sup>Required</sup> <a name="serviceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType"></a>

```java
public java.lang.String getServiceShareType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.internalValue"></a>

```java
public ComputeReservationReservationSharingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---


### ComputeReservationResourceStatusHealthInfoList <a name="ComputeReservationResourceStatusHealthInfoList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusHealthInfoList;

new ComputeReservationResourceStatusHealthInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get"></a>

```java
public ComputeReservationResourceStatusHealthInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeReservationResourceStatusHealthInfoOutputReference <a name="ComputeReservationResourceStatusHealthInfoOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusHealthInfoOutputReference;

new ComputeReservationResourceStatusHealthInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount">degradedBlockCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus">healthStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount">healthyBlockCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo">ComputeReservationResourceStatusHealthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `degradedBlockCount`<sup>Required</sup> <a name="degradedBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount"></a>

```java
public java.lang.Number getDegradedBlockCount();
```

- *Type:* java.lang.Number

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus"></a>

```java
public java.lang.String getHealthStatus();
```

- *Type:* java.lang.String

---

##### `healthyBlockCount`<sup>Required</sup> <a name="healthyBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount"></a>

```java
public java.lang.Number getHealthyBlockCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue"></a>

```java
public ComputeReservationResourceStatusHealthInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo">ComputeReservationResourceStatusHealthInfo</a>

---


### ComputeReservationResourceStatusList <a name="ComputeReservationResourceStatusList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusList;

new ComputeReservationResourceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get"></a>

```java
public ComputeReservationResourceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeReservationResourceStatusOutputReference <a name="ComputeReservationResourceStatusOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusOutputReference;

new ComputeReservationResourceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.healthInfo">healthInfo</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList">ComputeReservationResourceStatusHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationBlockCount">reservationBlockCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationMaintenance">reservationMaintenance</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.specificSkuAllocation">specificSkuAllocation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList">ComputeReservationResourceStatusSpecificSkuAllocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus">ComputeReservationResourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthInfo`<sup>Required</sup> <a name="healthInfo" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.healthInfo"></a>

```java
public ComputeReservationResourceStatusHealthInfoList getHealthInfo();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList">ComputeReservationResourceStatusHealthInfoList</a>

---

##### `reservationBlockCount`<sup>Required</sup> <a name="reservationBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationBlockCount"></a>

```java
public java.lang.Number getReservationBlockCount();
```

- *Type:* java.lang.Number

---

##### `reservationMaintenance`<sup>Required</sup> <a name="reservationMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationMaintenance"></a>

```java
public ComputeReservationResourceStatusReservationMaintenanceList getReservationMaintenance();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceList</a>

---

##### `specificSkuAllocation`<sup>Required</sup> <a name="specificSkuAllocation" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.specificSkuAllocation"></a>

```java
public ComputeReservationResourceStatusSpecificSkuAllocationList getSpecificSkuAllocation();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList">ComputeReservationResourceStatusSpecificSkuAllocationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.internalValue"></a>

```java
public ComputeReservationResourceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus">ComputeReservationResourceStatus</a>

---


### ComputeReservationResourceStatusReservationMaintenanceList <a name="ComputeReservationResourceStatusReservationMaintenanceList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusReservationMaintenanceList;

new ComputeReservationResourceStatusReservationMaintenanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get"></a>

```java
public ComputeReservationResourceStatusReservationMaintenanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeReservationResourceStatusReservationMaintenanceOutputReference <a name="ComputeReservationResourceStatusReservationMaintenanceOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference;

new ComputeReservationResourceStatusReservationMaintenanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">instanceMaintenanceOngoingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount">instanceMaintenancePendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount">maintenanceOngoingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount">maintenancePendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType">schedulingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">subblockInfraMaintenanceOngoingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">subblockInfraMaintenancePendingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance">upcomingGroupMaintenance</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance">ComputeReservationResourceStatusReservationMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceMaintenanceOngoingCount`<sup>Required</sup> <a name="instanceMaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```java
public java.lang.Number getInstanceMaintenanceOngoingCount();
```

- *Type:* java.lang.Number

---

##### `instanceMaintenancePendingCount`<sup>Required</sup> <a name="instanceMaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```java
public java.lang.Number getInstanceMaintenancePendingCount();
```

- *Type:* java.lang.Number

---

##### `maintenanceOngoingCount`<sup>Required</sup> <a name="maintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```java
public java.lang.Number getMaintenanceOngoingCount();
```

- *Type:* java.lang.Number

---

##### `maintenancePendingCount`<sup>Required</sup> <a name="maintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount"></a>

```java
public java.lang.Number getMaintenancePendingCount();
```

- *Type:* java.lang.Number

---

##### `schedulingType`<sup>Required</sup> <a name="schedulingType" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType"></a>

```java
public java.lang.String getSchedulingType();
```

- *Type:* java.lang.String

---

##### `subblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="subblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```java
public java.lang.Number getSubblockInfraMaintenanceOngoingCount();
```

- *Type:* java.lang.Number

---

##### `subblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="subblockInfraMaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```java
public java.lang.Number getSubblockInfraMaintenancePendingCount();
```

- *Type:* java.lang.Number

---

##### `upcomingGroupMaintenance`<sup>Required</sup> <a name="upcomingGroupMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance"></a>

```java
public ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList getUpcomingGroupMaintenance();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue"></a>

```java
public ComputeReservationResourceStatusReservationMaintenance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance">ComputeReservationResourceStatusReservationMaintenance</a>

---


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList;

new ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get"></a>

```java
public ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference;

new ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule">canReschedule</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime">latestWindowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown">maintenanceOnShutdown</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons">maintenanceReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus">maintenanceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime">windowEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canReschedule`<sup>Required</sup> <a name="canReschedule" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule"></a>

```java
public IResolvable getCanReschedule();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `latestWindowStartTime`<sup>Required</sup> <a name="latestWindowStartTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime"></a>

```java
public java.lang.String getLatestWindowStartTime();
```

- *Type:* java.lang.String

---

##### `maintenanceOnShutdown`<sup>Required</sup> <a name="maintenanceOnShutdown" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown"></a>

```java
public IResolvable getMaintenanceOnShutdown();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maintenanceReasons`<sup>Required</sup> <a name="maintenanceReasons" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons"></a>

```java
public java.util.List<java.lang.String> getMaintenanceReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maintenanceStatus`<sup>Required</sup> <a name="maintenanceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus"></a>

```java
public java.lang.String getMaintenanceStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `windowEndTime`<sup>Required</sup> <a name="windowEndTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime"></a>

```java
public java.lang.String getWindowEndTime();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue"></a>

```java
public ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a>

---


### ComputeReservationResourceStatusSpecificSkuAllocationList <a name="ComputeReservationResourceStatusSpecificSkuAllocationList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusSpecificSkuAllocationList;

new ComputeReservationResourceStatusSpecificSkuAllocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get"></a>

```java
public ComputeReservationResourceStatusSpecificSkuAllocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeReservationResourceStatusSpecificSkuAllocationOutputReference <a name="ComputeReservationResourceStatusSpecificSkuAllocationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference;

new ComputeReservationResourceStatusSpecificSkuAllocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId">sourceInstanceTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations">utilizations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation">ComputeReservationResourceStatusSpecificSkuAllocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInstanceTemplateId`<sup>Required</sup> <a name="sourceInstanceTemplateId" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId"></a>

```java
public java.lang.String getSourceInstanceTemplateId();
```

- *Type:* java.lang.String

---

##### `utilizations`<sup>Required</sup> <a name="utilizations" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations"></a>

```java
public StringMap getUtilizations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue"></a>

```java
public ComputeReservationResourceStatusSpecificSkuAllocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation">ComputeReservationResourceStatusSpecificSkuAllocation</a>

---


### ComputeReservationShareSettingsOutputReference <a name="ComputeReservationShareSettingsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationShareSettingsOutputReference;

new ComputeReservationShareSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap">putProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetProjectMap">resetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetShareType">resetShareType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProjectMap` <a name="putProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap"></a>

```java
public void putProjectMap(IResolvable|java.util.List<ComputeReservationShareSettingsProjectMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>>

---

##### `resetProjectMap` <a name="resetProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetProjectMap"></a>

```java
public void resetProjectMap()
```

##### `resetShareType` <a name="resetShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetShareType"></a>

```java
public void resetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList">ComputeReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMapInput">projectMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMap"></a>

```java
public ComputeReservationShareSettingsProjectMapList getProjectMap();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList">ComputeReservationShareSettingsProjectMapList</a>

---

##### `projectMapInput`<sup>Optional</sup> <a name="projectMapInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMapInput"></a>

```java
public IResolvable|java.util.List<ComputeReservationShareSettingsProjectMap> getProjectMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>>

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```java
public java.lang.String getShareTypeInput();
```

- *Type:* java.lang.String

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.internalValue"></a>

```java
public ComputeReservationShareSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---


### ComputeReservationShareSettingsProjectMapList <a name="ComputeReservationShareSettingsProjectMapList" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationShareSettingsProjectMapList;

new ComputeReservationShareSettingsProjectMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get"></a>

```java
public ComputeReservationShareSettingsProjectMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeReservationShareSettingsProjectMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>>

---


### ComputeReservationShareSettingsProjectMapOutputReference <a name="ComputeReservationShareSettingsProjectMapOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationShareSettingsProjectMapOutputReference;

new ComputeReservationShareSettingsProjectMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeReservationShareSettingsProjectMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>

---


### ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList;

new ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get"></a>

```java
public ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>>

---


### ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference;

new ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>

---


### ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList;

new ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get"></a>

```java
public ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesLocalSsds> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>>

---


### ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference;

new ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface">resetInterface</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterface` <a name="resetInterface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```java
public void resetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>

---


### ComputeReservationSpecificReservationInstancePropertiesOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference;

new ComputeReservationSpecificReservationInstancePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators">putGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds">putLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators">resetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds">resetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuestAccelerators` <a name="putGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators"></a>

```java
public void putGuestAccelerators(IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>>

---

##### `putLocalSsds` <a name="putLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds"></a>

```java
public void putLocalSsds(IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesLocalSsds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>>

---

##### `resetGuestAccelerators` <a name="resetGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```java
public void resetGuestAccelerators()
```

##### `resetLocalSsds` <a name="resetLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds"></a>

```java
public void resetLocalSsds()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators">guestAccelerators</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds">localSsds</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint">locationHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput">guestAcceleratorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput">localSsdsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guestAccelerators`<sup>Required</sup> <a name="guestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators"></a>

```java
public ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList getGuestAccelerators();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a>

---

##### `localSsds`<sup>Required</sup> <a name="localSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds"></a>

```java
public ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList getLocalSsds();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a>

---

##### `locationHint`<sup>Required</sup> <a name="locationHint" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint"></a>

```java
public java.lang.String getLocationHint();
```

- *Type:* java.lang.String

---

##### `guestAcceleratorsInput`<sup>Optional</sup> <a name="guestAcceleratorsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```java
public IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators> getGuestAcceleratorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>>

---

##### `localSsdsInput`<sup>Optional</sup> <a name="localSsdsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput"></a>

```java
public IResolvable|java.util.List<ComputeReservationSpecificReservationInstancePropertiesLocalSsds> getLocalSsdsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue"></a>

```java
public ComputeReservationSpecificReservationInstanceProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---


### ComputeReservationSpecificReservationOutputReference <a name="ComputeReservationSpecificReservationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationSpecificReservationOutputReference;

new ComputeReservationSpecificReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties">putInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetInstanceProperties">resetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetSourceInstanceTemplate">resetSourceInstanceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceProperties` <a name="putInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties"></a>

```java
public void putInstanceProperties(ComputeReservationSpecificReservationInstanceProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---

##### `resetInstanceProperties` <a name="resetInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetInstanceProperties"></a>

```java
public void resetInstanceProperties()
```

##### `resetSourceInstanceTemplate` <a name="resetSourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetSourceInstanceTemplate"></a>

```java
public void resetSourceInstanceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.assuredCount">assuredCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instanceProperties">instanceProperties</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference">ComputeReservationSpecificReservationInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.inUseCount">inUseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput">instancePropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplateInput">sourceInstanceTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate">sourceInstanceTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assuredCount`<sup>Required</sup> <a name="assuredCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.assuredCount"></a>

```java
public java.lang.Number getAssuredCount();
```

- *Type:* java.lang.Number

---

##### `instanceProperties`<sup>Required</sup> <a name="instanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instanceProperties"></a>

```java
public ComputeReservationSpecificReservationInstancePropertiesOutputReference getInstanceProperties();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference">ComputeReservationSpecificReservationInstancePropertiesOutputReference</a>

---

##### `inUseCount`<sup>Required</sup> <a name="inUseCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.inUseCount"></a>

```java
public java.lang.Number getInUseCount();
```

- *Type:* java.lang.Number

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `instancePropertiesInput`<sup>Optional</sup> <a name="instancePropertiesInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput"></a>

```java
public ComputeReservationSpecificReservationInstanceProperties getInstancePropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---

##### `sourceInstanceTemplateInput`<sup>Optional</sup> <a name="sourceInstanceTemplateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplateInput"></a>

```java
public java.lang.String getSourceInstanceTemplateInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `sourceInstanceTemplate`<sup>Required</sup> <a name="sourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate"></a>

```java
public java.lang.String getSourceInstanceTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.internalValue"></a>

```java
public ComputeReservationSpecificReservation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---


### ComputeReservationTimeoutsOutputReference <a name="ComputeReservationTimeoutsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_reservation.ComputeReservationTimeoutsOutputReference;

new ComputeReservationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeReservationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---



