# `workstationsWorkstationConfig` Submodule <a name="`workstationsWorkstationConfig` Submodule" id="@cdktn/provider-google.workstationsWorkstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationConfigA <a name="WorkstationsWorkstationConfigA" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config google_workstations_workstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigA(scope Construct, id *string, config WorkstationsWorkstationConfigAConfig) WorkstationsWorkstationConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig">WorkstationsWorkstationConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig">WorkstationsWorkstationConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts">PutAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories">PutEphemeralDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories">PutPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks">PutReadinessChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections">ResetDisableTcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent">ResetEnableAuditAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories">ResetEphemeralDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations">ResetMaxUsableWorkstations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories">ResetPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks">ResetReadinessChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones">ResetReplicaZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout">ResetRunningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedPorts` <a name="PutAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts"></a>

```go
func PutAllowedPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putAllowedPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContainer` <a name="PutContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer"></a>

```go
func PutContainer(value WorkstationsWorkstationConfigContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey"></a>

```go
func PutEncryptionKey(value WorkstationsWorkstationConfigEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `PutEphemeralDirectories` <a name="PutEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories"></a>

```go
func PutEphemeralDirectories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putEphemeralDirectories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHost` <a name="PutHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost"></a>

```go
func PutHost(value WorkstationsWorkstationConfigHost)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `PutPersistentDirectories` <a name="PutPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories"></a>

```go
func PutPersistentDirectories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putPersistentDirectories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReadinessChecks` <a name="PutReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks"></a>

```go
func PutReadinessChecks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putReadinessChecks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts"></a>

```go
func PutTimeouts(value WorkstationsWorkstationConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

---

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAllowedPorts"></a>

```go
func ResetAllowedPorts()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisableTcpConnections` <a name="ResetDisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisableTcpConnections"></a>

```go
func ResetDisableTcpConnections()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnableAuditAgent` <a name="ResetEnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEnableAuditAgent"></a>

```go
func ResetEnableAuditAgent()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetEphemeralDirectories` <a name="ResetEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetEphemeralDirectories"></a>

```go
func ResetEphemeralDirectories()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetIdleTimeout"></a>

```go
func ResetIdleTimeout()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxUsableWorkstations` <a name="ResetMaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetMaxUsableWorkstations"></a>

```go
func ResetMaxUsableWorkstations()
```

##### `ResetPersistentDirectories` <a name="ResetPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetPersistentDirectories"></a>

```go
func ResetPersistentDirectories()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReadinessChecks` <a name="ResetReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReadinessChecks"></a>

```go
func ResetReadinessChecks()
```

##### `ResetReplicaZones` <a name="ResetReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetReplicaZones"></a>

```go
func ResetReplicaZones()
```

##### `ResetRunningTimeout` <a name="ResetRunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetRunningTimeout"></a>

```go
func ResetRunningTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.WorkstationsWorkstationConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.WorkstationsWorkstationConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.WorkstationsWorkstationConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.WorkstationsWorkstationConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkstationsWorkstationConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkstationsWorkstationConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkstationsWorkstationConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts">AllowedPorts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded">Degraded</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories">EphemeralDirectories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host">Host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories">PersistentDirectories</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks">ReadinessChecks</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput">DisableTcpConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput">EnableAuditAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput">EphemeralDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput">HostInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput">MaxUsableWorkstationsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput">PersistentDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput">ReadinessChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput">ReplicaZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput">RunningTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections">DisableTcpConnections</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent">EnableAuditAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations">MaxUsableWorkstations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones">ReplicaZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout">RunningTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId">WorkstationConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPorts"></a>

```go
func AllowedPorts() WorkstationsWorkstationConfigAllowedPortsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList">WorkstationsWorkstationConfigAllowedPortsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.conditions"></a>

```go
func Conditions() WorkstationsWorkstationConfigConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList">WorkstationsWorkstationConfigConditionsList</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.container"></a>

```go
func Container() WorkstationsWorkstationConfigContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference">WorkstationsWorkstationConfigContainerOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Degraded`<sup>Required</sup> <a name="Degraded" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.degraded"></a>

```go
func Degraded() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKey"></a>

```go
func EncryptionKey() WorkstationsWorkstationConfigEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference">WorkstationsWorkstationConfigEncryptionKeyOutputReference</a>

---

##### `EphemeralDirectories`<sup>Required</sup> <a name="EphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectories"></a>

```go
func EphemeralDirectories() WorkstationsWorkstationConfigEphemeralDirectoriesList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList">WorkstationsWorkstationConfigEphemeralDirectoriesList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.host"></a>

```go
func Host() WorkstationsWorkstationConfigHostOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference">WorkstationsWorkstationConfigHostOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PersistentDirectories`<sup>Required</sup> <a name="PersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectories"></a>

```go
func PersistentDirectories() WorkstationsWorkstationConfigPersistentDirectoriesList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList">WorkstationsWorkstationConfigPersistentDirectoriesList</a>

---

##### `ReadinessChecks`<sup>Required</sup> <a name="ReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecks"></a>

```go
func ReadinessChecks() WorkstationsWorkstationConfigReadinessChecksList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList">WorkstationsWorkstationConfigReadinessChecksList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeouts"></a>

```go
func Timeouts() WorkstationsWorkstationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference">WorkstationsWorkstationConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.allowedPortsInput"></a>

```go
func AllowedPortsInput() interface{}
```

- *Type:* interface{}

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.containerInput"></a>

```go
func ContainerInput() WorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisableTcpConnectionsInput`<sup>Optional</sup> <a name="DisableTcpConnectionsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnectionsInput"></a>

```go
func DisableTcpConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableAuditAgentInput`<sup>Optional</sup> <a name="EnableAuditAgentInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgentInput"></a>

```go
func EnableAuditAgentInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() WorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---

##### `EphemeralDirectoriesInput`<sup>Optional</sup> <a name="EphemeralDirectoriesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.ephemeralDirectoriesInput"></a>

```go
func EphemeralDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.hostInput"></a>

```go
func HostInput() WorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxUsableWorkstationsInput`<sup>Optional</sup> <a name="MaxUsableWorkstationsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstationsInput"></a>

```go
func MaxUsableWorkstationsInput() *f64
```

- *Type:* *f64

---

##### `PersistentDirectoriesInput`<sup>Optional</sup> <a name="PersistentDirectoriesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.persistentDirectoriesInput"></a>

```go
func PersistentDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReadinessChecksInput`<sup>Optional</sup> <a name="ReadinessChecksInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.readinessChecksInput"></a>

```go
func ReadinessChecksInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicaZonesInput`<sup>Optional</sup> <a name="ReplicaZonesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZonesInput"></a>

```go
func ReplicaZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RunningTimeoutInput`<sup>Optional</sup> <a name="RunningTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeoutInput"></a>

```go
func RunningTimeoutInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterIdInput"></a>

```go
func WorkstationClusterIdInput() *string
```

- *Type:* *string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigIdInput"></a>

```go
func WorkstationConfigIdInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisableTcpConnections`<sup>Required</sup> <a name="DisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.disableTcpConnections"></a>

```go
func DisableTcpConnections() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableAuditAgent`<sup>Required</sup> <a name="EnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.enableAuditAgent"></a>

```go
func EnableAuditAgent() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.idleTimeout"></a>

```go
func IdleTimeout() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxUsableWorkstations`<sup>Required</sup> <a name="MaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.maxUsableWorkstations"></a>

```go
func MaxUsableWorkstations() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReplicaZones`<sup>Required</sup> <a name="ReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.replicaZones"></a>

```go
func ReplicaZones() *[]*string
```

- *Type:* *[]*string

---

##### `RunningTimeout`<sup>Required</sup> <a name="RunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.runningTimeout"></a>

```go
func RunningTimeout() *string
```

- *Type:* *string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationClusterId"></a>

```go
func WorkstationClusterId() *string
```

- *Type:* *string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.workstationConfigId"></a>

```go
func WorkstationConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationConfigAConfig <a name="WorkstationsWorkstationConfigAConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	WorkstationClusterId: *string,
	WorkstationConfigId: *string,
	AllowedPorts: interface{},
	Annotations: *map[string]*string,
	Container: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer,
	DeletionPolicy: *string,
	DisableTcpConnections: interface{},
	DisplayName: *string,
	EnableAuditAgent: interface{},
	EncryptionKey: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey,
	EphemeralDirectories: interface{},
	Host: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost,
	Id: *string,
	IdleTimeout: *string,
	Labels: *map[string]*string,
	MaxUsableWorkstations: *f64,
	PersistentDirectories: interface{},
	Project: *string,
	ReadinessChecks: interface{},
	ReplicaZones: *[]*string,
	RunningTimeout: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location">Location</a></code> | <code>*string</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>*string</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts">AllowedPorts</a></code> | <code>interface{}</code> | allowed_ports block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container">Container</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections">DisableTcpConnections</a></code> | <code>interface{}</code> | Disables support for plain TCP connections in the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent">EnableAuditAgent</a></code> | <code>interface{}</code> | Whether to enable Linux 'auditd' logging on the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories">EphemeralDirectories</a></code> | <code>interface{}</code> | ephemeral_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host">Host</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | How long to wait before automatically stopping an instance that hasn't recently received any user traffic. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations">MaxUsableWorkstations</a></code> | <code>*f64</code> | Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories">PersistentDirectories</a></code> | <code>interface{}</code> | persistent_directories block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks">ReadinessChecks</a></code> | <code>interface{}</code> | readiness_checks block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones">ReplicaZones</a></code> | <code>*[]*string</code> | Specifies the zones used to replicate the VM and disk resources within the region. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout">RunningTimeout</a></code> | <code>*string</code> | How long to wait before automatically stopping a workstation after it was started. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#location WorkstationsWorkstationConfigA#location}

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationClusterId"></a>

```go
WorkstationClusterId *string
```

- *Type:* *string

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#workstation_cluster_id WorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.workstationConfigId"></a>

```go
WorkstationConfigId *string
```

- *Type:* *string

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#workstation_config_id WorkstationsWorkstationConfigA#workstation_config_id}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.allowedPorts"></a>

```go
AllowedPorts interface{}
```

- *Type:* interface{}

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#allowed_ports WorkstationsWorkstationConfigA#allowed_ports}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#annotations WorkstationsWorkstationConfigA#annotations}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.container"></a>

```go
Container WorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#container WorkstationsWorkstationConfigA#container}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#deletion_policy WorkstationsWorkstationConfigA#deletion_policy}

---

##### `DisableTcpConnections`<sup>Optional</sup> <a name="DisableTcpConnections" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.disableTcpConnections"></a>

```go
DisableTcpConnections interface{}
```

- *Type:* interface{}

Disables support for plain TCP connections in the workstation.

By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#disable_tcp_connections WorkstationsWorkstationConfigA#disable_tcp_connections}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#display_name WorkstationsWorkstationConfigA#display_name}

---

##### `EnableAuditAgent`<sup>Optional</sup> <a name="EnableAuditAgent" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.enableAuditAgent"></a>

```go
EnableAuditAgent interface{}
```

- *Type:* interface{}

Whether to enable Linux 'auditd' logging on the workstation.

When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_audit_agent WorkstationsWorkstationConfigA#enable_audit_agent}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.encryptionKey"></a>

```go
EncryptionKey WorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#encryption_key WorkstationsWorkstationConfigA#encryption_key}

---

##### `EphemeralDirectories`<sup>Optional</sup> <a name="EphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.ephemeralDirectories"></a>

```go
EphemeralDirectories interface{}
```

- *Type:* interface{}

ephemeral_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#ephemeral_directories WorkstationsWorkstationConfigA#ephemeral_directories}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.host"></a>

```go
Host WorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#host WorkstationsWorkstationConfigA#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.idleTimeout"></a>

```go
IdleTimeout *string
```

- *Type:* *string

How long to wait before automatically stopping an instance that hasn't recently received any user traffic.

A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#idle_timeout WorkstationsWorkstationConfigA#idle_timeout}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#labels WorkstationsWorkstationConfigA#labels}

---

##### `MaxUsableWorkstations`<sup>Optional</sup> <a name="MaxUsableWorkstations" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.maxUsableWorkstations"></a>

```go
MaxUsableWorkstations *f64
```

- *Type:* *f64

Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#max_usable_workstations WorkstationsWorkstationConfigA#max_usable_workstations}

---

##### `PersistentDirectories`<sup>Optional</sup> <a name="PersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.persistentDirectories"></a>

```go
PersistentDirectories interface{}
```

- *Type:* interface{}

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#persistent_directories WorkstationsWorkstationConfigA#persistent_directories}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#project WorkstationsWorkstationConfigA#project}.

---

##### `ReadinessChecks`<sup>Optional</sup> <a name="ReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.readinessChecks"></a>

```go
ReadinessChecks interface{}
```

- *Type:* interface{}

readiness_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#readiness_checks WorkstationsWorkstationConfigA#readiness_checks}

---

##### `ReplicaZones`<sup>Optional</sup> <a name="ReplicaZones" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.replicaZones"></a>

```go
ReplicaZones *[]*string
```

- *Type:* *[]*string

Specifies the zones used to replicate the VM and disk resources within the region.

If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#replica_zones WorkstationsWorkstationConfigA#replica_zones}

---

##### `RunningTimeout`<sup>Optional</sup> <a name="RunningTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.runningTimeout"></a>

```go
RunningTimeout *string
```

- *Type:* *string

How long to wait before automatically stopping a workstation after it was started.

A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#running_timeout WorkstationsWorkstationConfigA#running_timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAConfig.property.timeouts"></a>

```go
Timeouts WorkstationsWorkstationConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts">WorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#timeouts WorkstationsWorkstationConfigA#timeouts}

---

### WorkstationsWorkstationConfigAllowedPorts <a name="WorkstationsWorkstationConfigAllowedPorts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigAllowedPorts {
	First: *f64,
	Last: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first">First</a></code> | <code>*f64</code> | Starting port number for the current range of ports. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last">Last</a></code> | <code>*f64</code> | Ending port number for the current range of ports. |

---

##### `First`<sup>Optional</sup> <a name="First" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.first"></a>

```go
First *f64
```

- *Type:* *f64

Starting port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#first WorkstationsWorkstationConfigA#first}

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPorts.property.last"></a>

```go
Last *f64
```

- *Type:* *f64

Ending port number for the current range of ports.

Valid ports are 22, 80, and ports within the range 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#last WorkstationsWorkstationConfigA#last}

---

### WorkstationsWorkstationConfigConditions <a name="WorkstationsWorkstationConfigConditions" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigConditions {

}
```


### WorkstationsWorkstationConfigContainer <a name="WorkstationsWorkstationConfigContainer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigContainer {
	Args: *[]*string,
	Command: *[]*string,
	Env: *map[string]*string,
	Image: *string,
	RunAsUser: *f64,
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args">Args</a></code> | <code>*[]*string</code> | Arguments passed to the entrypoint. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command">Command</a></code> | <code>*[]*string</code> | If set, overrides the default ENTRYPOINT specified by the image. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env">Env</a></code> | <code>*map[string]*string</code> | Environment variables passed to the container. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image">Image</a></code> | <code>*string</code> | Docker image defining the container. This image must be accessible by the config's service account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser">RunAsUser</a></code> | <code>*f64</code> | If set, overrides the USER specified in the image with the given uid. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir">WorkingDir</a></code> | <code>*string</code> | If set, overrides the default DIR specified by the image. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#args WorkstationsWorkstationConfigA#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#command WorkstationsWorkstationConfigA#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.env"></a>

```go
Env *map[string]*string
```

- *Type:* *map[string]*string

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#env WorkstationsWorkstationConfigA#env}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#image WorkstationsWorkstationConfigA#image}

---

##### `RunAsUser`<sup>Optional</sup> <a name="RunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.runAsUser"></a>

```go
RunAsUser *f64
```

- *Type:* *f64

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#run_as_user WorkstationsWorkstationConfigA#run_as_user}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#working_dir WorkstationsWorkstationConfigA#working_dir}

---

### WorkstationsWorkstationConfigEncryptionKey <a name="WorkstationsWorkstationConfigEncryptionKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigEncryptionKey {
	KmsKey: *string,
	KmsKeyServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The name of the Google Cloud KMS encryption key. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | The service account to use with the specified KMS key. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#kms_key WorkstationsWorkstationConfigA#kms_key}

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount"></a>

```go
KmsKeyServiceAccount *string
```

- *Type:* *string

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#kms_key_service_account WorkstationsWorkstationConfigA#kms_key_service_account}

---

### WorkstationsWorkstationConfigEphemeralDirectories <a name="WorkstationsWorkstationConfigEphemeralDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigEphemeralDirectories {
	GcePd: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd,
	MountPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath">MountPath</a></code> | <code>*string</code> | Location of this directory in the running workstation. |

---

##### `GcePd`<sup>Optional</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.gcePd"></a>

```go
GcePd WorkstationsWorkstationConfigEphemeralDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectories.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigEphemeralDirectoriesGcePd <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd {
	DiskType: *string,
	ReadOnly: interface{},
	SourceImage: *string,
	SourceSnapshot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType">DiskType</a></code> | <code>*string</code> | Type of the disk to use. Defaults to '"pd-standard"'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Whether the disk is read only. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage">SourceImage</a></code> | <code>*string</code> | Name of the disk image to use as the source for the disk. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | Name of the snapshot to use as the source for the disk. |

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Type of the disk to use. Defaults to '"pd-standard"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Whether the disk is read only.

If true, the disk may be shared by multiple VMs and 'sourceSnapshot' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#read_only WorkstationsWorkstationConfigA#read_only}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceImage"></a>

```go
SourceImage *string
```

- *Type:* *string

Name of the disk image to use as the source for the disk.

Must be empty 'sourceSnapshot' is set.
Updating 'sourceImage' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#source_image WorkstationsWorkstationConfigA#source_image}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

Name of the snapshot to use as the source for the disk.

Must be empty if 'sourceImage' is set.
Must be empty if 'read_only' is false.
Updating 'source_snapshot' will update content in the ephemeral directory after the workstation is restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigHost <a name="WorkstationsWorkstationConfigHost" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHost {
	GceInstance: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance">GceInstance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | gce_instance block. |

---

##### `GceInstance`<sup>Optional</sup> <a name="GceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost.property.gceInstance"></a>

```go
GceInstance WorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#gce_instance WorkstationsWorkstationConfigA#gce_instance}

---

### WorkstationsWorkstationConfigHostGceInstance <a name="WorkstationsWorkstationConfigHostGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHostGceInstance {
	Accelerators: interface{},
	BoostConfigs: interface{},
	BootDiskSizeGb: *f64,
	ConfidentialInstanceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig,
	DisablePublicIpAddresses: interface{},
	DisableSsh: interface{},
	EnableNestedVirtualization: interface{},
	MachineType: *string,
	PoolSize: *f64,
	ServiceAccount: *string,
	ServiceAccountScopes: *[]*string,
	ShieldedInstanceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig,
	Tags: *[]*string,
	VmTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators">Accelerators</a></code> | <code>interface{}</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs">BoostConfigs</a></code> | <code>interface{}</code> | boost_configs block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | Size of the boot disk in GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses">DisablePublicIpAddresses</a></code> | <code>interface{}</code> | Whether instances have no public IP address. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh">DisableSsh</a></code> | <code>interface{}</code> | Whether to disable SSH access to the VM. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType">MachineType</a></code> | <code>*string</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize">PoolSize</a></code> | <code>*f64</code> | Number of instances to pool for faster workstation startup. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Email address of the service account that will be used on VM instances used to support this config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>*[]*string</code> | Scopes to grant to the service_account. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags">Tags</a></code> | <code>*[]*string</code> | Network tags to add to the Compute Engine machines backing the Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags">VmTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the VM instances backing the Workstations. |

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.accelerators"></a>

```go
Accelerators interface{}
```

- *Type:* interface{}

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `BoostConfigs`<sup>Optional</sup> <a name="BoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.boostConfigs"></a>

```go
BoostConfigs interface{}
```

- *Type:* interface{}

boost_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#boost_configs WorkstationsWorkstationConfigA#boost_configs}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig"></a>

```go
ConfidentialInstanceConfig WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#confidential_instance_config WorkstationsWorkstationConfigA#confidential_instance_config}

---

##### `DisablePublicIpAddresses`<sup>Optional</sup> <a name="DisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses"></a>

```go
DisablePublicIpAddresses interface{}
```

- *Type:* interface{}

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#disable_public_ip_addresses WorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

##### `DisableSsh`<sup>Optional</sup> <a name="DisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.disableSsh"></a>

```go
DisableSsh interface{}
```

- *Type:* interface{}

Whether to disable SSH access to the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#disable_ssh WorkstationsWorkstationConfigA#disable_ssh}

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.enableNestedVirtualization"></a>

```go
EnableNestedVirtualization interface{}
```

- *Type:* interface{}

Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.poolSize"></a>

```go
PoolSize *f64
```

- *Type:* *f64

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#service_account WorkstationsWorkstationConfigA#service_account}

---

##### `ServiceAccountScopes`<sup>Optional</sup> <a name="ServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.serviceAccountScopes"></a>

```go
ServiceAccountScopes *[]*string
```

- *Type:* *[]*string

Scopes to grant to the service_account.

Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have 'iam.serviceAccounts.actAs' on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#service_account_scopes WorkstationsWorkstationConfigA#service_account_scopes}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig"></a>

```go
ShieldedInstanceConfig WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#shielded_instance_config WorkstationsWorkstationConfigA#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#tags WorkstationsWorkstationConfigA#tags}

---

##### `VmTags`<sup>Optional</sup> <a name="VmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance.property.vmTags"></a>

```go
VmTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the VM instances backing the Workstations.

Tag keys and values have the same definition as
https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview
Keys must be in the format 'tagKeys/{tag_key_id}', and
values are in the format 'tagValues/456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#vm_tags WorkstationsWorkstationConfigA#vm_tags}

---

### WorkstationsWorkstationConfigHostGceInstanceAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators {
	Count: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count">Count</a></code> | <code>*f64</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type">Type</a></code> | <code>*string</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAccelerators.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigs <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs {
	Id: *string,
	Accelerators: interface{},
	BootDiskSizeGb: *f64,
	EnableNestedVirtualization: interface{},
	MachineType: *string,
	PoolSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id">Id</a></code> | <code>*string</code> | The id to be used for the boost config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators">Accelerators</a></code> | <code>interface{}</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType">MachineType</a></code> | <code>*string</code> | The type of machine that boosted VM instances will use—for example, e2-standard-4. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize">PoolSize</a></code> | <code>*f64</code> | Number of instances to pool for faster workstation boosting. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.id"></a>

```go
Id *string
```

- *Type:* *string

The id to be used for the boost config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#id WorkstationsWorkstationConfigA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.accelerators"></a>

```go
Accelerators interface{}
```

- *Type:* interface{}

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#accelerators WorkstationsWorkstationConfigA#accelerators}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#boot_disk_size_gb WorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.enableNestedVirtualization"></a>

```go
EnableNestedVirtualization interface{}
```

- *Type:* interface{}

Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations.

See https://cloud.google.com/workstations/docs/reference/rest/v1/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_nested_virtualization WorkstationsWorkstationConfigA#enable_nested_virtualization}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of machine that boosted VM instances will use—for example, e2-standard-4.

For more information about machine types that Cloud Workstations supports, see the list of available machine types https://cloud.google.com/workstations/docs/available-machine-types. Defaults to e2-standard-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#machine_type WorkstationsWorkstationConfigA#machine_type}

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigs.property.poolSize"></a>

```go
PoolSize *f64
```

- *Type:* *f64

Number of instances to pool for faster workstation boosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#pool_size WorkstationsWorkstationConfigA#pool_size}

---

### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators {
	Count: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count">Count</a></code> | <code>*f64</code> | Number of accelerator cards exposed to the instance. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type">Type</a></code> | <code>*string</code> | Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100". |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of accelerator cards exposed to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#count WorkstationsWorkstationConfigA#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#type WorkstationsWorkstationConfigA#type}

---

### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig {
	EnableConfidentialCompute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | Whether the instance has confidential compute enabled. |

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```go
EnableConfidentialCompute interface{}
```

- *Type:* interface{}

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_confidential_compute WorkstationsWorkstationConfigA#enable_confidential_compute}

---

### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig {
	EnableIntegrityMonitoring: interface{},
	EnableSecureBoot: interface{},
	EnableVtpm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | Whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | Whether the instance has the vTPM enabled. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```go
EnableIntegrityMonitoring interface{}
```

- *Type:* interface{}

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_integrity_monitoring WorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_secure_boot WorkstationsWorkstationConfigA#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```go
EnableVtpm interface{}
```

- *Type:* interface{}

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#enable_vtpm WorkstationsWorkstationConfigA#enable_vtpm}

---

### WorkstationsWorkstationConfigPersistentDirectories <a name="WorkstationsWorkstationConfigPersistentDirectories" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigPersistentDirectories {
	GceHd: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd,
	GcePd: github.com/cdktn-io/cdktn-provider-google-go/google/v19.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd,
	MountPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd">GceHd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | gce_hd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath">MountPath</a></code> | <code>*string</code> | Location of this directory in the running workstation. |

---

##### `GceHd`<sup>Optional</sup> <a name="GceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gceHd"></a>

```go
GceHd WorkstationsWorkstationConfigPersistentDirectoriesGceHd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

gce_hd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#gce_hd WorkstationsWorkstationConfigA#gce_hd}

---

##### `GcePd`<sup>Optional</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.gcePd"></a>

```go
GcePd WorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#gce_pd WorkstationsWorkstationConfigA#gce_pd}

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectories.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#mount_path WorkstationsWorkstationConfigA#mount_path}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGceHd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd {
	ArchiveTimeout: *string,
	ReclaimPolicy: *string,
	SizeGb: *f64,
	SourceSnapshot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout">ArchiveTimeout</a></code> | <code>*string</code> | How long to wait before converting the disk into a snapshot. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"]. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | The GB capacity of a persistent home directory. Defaults to '200'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | Name of the snapshot to use as the source for the disk. |

---

##### `ArchiveTimeout`<sup>Optional</sup> <a name="ArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.archiveTimeout"></a>

```go
ArchiveTimeout *string
```

- *Type:* *string

How long to wait before converting the disk into a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#archive_timeout WorkstationsWorkstationConfigA#archive_timeout}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.reclaimPolicy"></a>

```go
ReclaimPolicy *string
```

- *Type:* *string

Whether the persistent disk should be deleted when the workstation is deleted. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

The GB capacity of a persistent home directory. Defaults to '200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

Name of the snapshot to use as the source for the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigPersistentDirectoriesGcePd <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd {
	DiskType: *string,
	FsType: *string,
	ReclaimPolicy: *string,
	SizeGb: *f64,
	SourceSnapshot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType">DiskType</a></code> | <code>*string</code> | The type of the persistent disk for the home directory. Defaults to 'pd-standard'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType">FsType</a></code> | <code>*string</code> | Type of file system that the disk should be formatted with. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | Whether the persistent disk should be deleted when the workstation is deleted. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | The GB capacity of a persistent home directory for each workstation created with this configuration. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | Name of the snapshot to use as the source for the disk. |

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The type of the persistent disk for the home directory. Defaults to 'pd-standard'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#disk_type WorkstationsWorkstationConfigA#disk_type}

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType"></a>

```go
FsType *string
```

- *Type:* *string

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if 'sourceSnapshot' is set. Defaults to 'ext4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#fs_type WorkstationsWorkstationConfigA#fs_type}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy"></a>

```go
ReclaimPolicy *string
```

- *Type:* *string

Whether the persistent disk should be deleted when the workstation is deleted.

Valid values are 'DELETE' and 'RETAIN'. Defaults to 'DELETE'. Possible values: ["DELETE", "RETAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#reclaim_policy WorkstationsWorkstationConfigA#reclaim_policy}

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

The GB capacity of a persistent home directory for each workstation created with this configuration.

Must be empty if 'sourceSnapshot' is set.
Valid values are '10', '50', '100', '200', '500', or '1000'. Defaults to '200'. If less than '200' GB, the 'diskType' must be 'pd-balanced' or 'pd-ssd'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#size_gb WorkstationsWorkstationConfigA#size_gb}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

Name of the snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, 'sizeGb' and 'fsType' must be empty. Can only be updated if it has an existing value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#source_snapshot WorkstationsWorkstationConfigA#source_snapshot}

---

### WorkstationsWorkstationConfigReadinessChecks <a name="WorkstationsWorkstationConfigReadinessChecks" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigReadinessChecks {
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path">Path</a></code> | <code>*string</code> | Path to which the request should be sent. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port">Port</a></code> | <code>*f64</code> | Port to which the request should be sent. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#path WorkstationsWorkstationConfigA#path}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecks.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port to which the request should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#port WorkstationsWorkstationConfigA#port}

---

### WorkstationsWorkstationConfigTimeouts <a name="WorkstationsWorkstationConfigTimeouts" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

&workstationsworkstationconfig.WorkstationsWorkstationConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#create WorkstationsWorkstationConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#delete WorkstationsWorkstationConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/workstations_workstation_config#update WorkstationsWorkstationConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationConfigAllowedPortsList <a name="WorkstationsWorkstationConfigAllowedPortsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigAllowedPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigAllowedPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigAllowedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigAllowedPortsOutputReference <a name="WorkstationsWorkstationConfigAllowedPortsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigAllowedPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigAllowedPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst">ResetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast">ResetLast</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirst` <a name="ResetFirst" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetFirst"></a>

```go
func ResetFirst()
```

##### `ResetLast` <a name="ResetLast" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.resetLast"></a>

```go
func ResetLast()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput">FirstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput">LastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.firstInput"></a>

```go
func FirstInput() *f64
```

- *Type:* *f64

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.lastInput"></a>

```go
func LastInput() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigAllowedPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigConditionsList <a name="WorkstationsWorkstationConfigConditionsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkstationsWorkstationConfigConditionsOutputReference <a name="WorkstationsWorkstationConfigConditionsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details">Details</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigConditions
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigConditions">WorkstationsWorkstationConfigConditions</a>

---


### WorkstationsWorkstationConfigContainerOutputReference <a name="WorkstationsWorkstationConfigContainerOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser">ResetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetRunAsUser` <a name="ResetRunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser"></a>

```go
func ResetRunAsUser()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput">EnvInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput">RunAsUserInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env">Env</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser">RunAsUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.envInput"></a>

```go
func EnvInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput"></a>

```go
func RunAsUserInput() *f64
```

- *Type:* *f64

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.env"></a>

```go
func Env() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.runAsUser"></a>

```go
func RunAsUser() *f64
```

- *Type:* *f64

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigContainer">WorkstationsWorkstationConfigContainer</a>

---


### WorkstationsWorkstationConfigEncryptionKeyOutputReference <a name="WorkstationsWorkstationConfigEncryptionKeyOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```go
func KmsKeyServiceAccountInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEncryptionKey">WorkstationsWorkstationConfigEncryptionKey</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceImage"></a>

```go
func ResetSourceImage()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput">SourceImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage">SourceImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImageInput"></a>

```go
func SourceImageInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceImage"></a>

```go
func SourceImage() *string
```

- *Type:* *string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigEphemeralDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigEphemeralDirectoriesList <a name="WorkstationsWorkstationConfigEphemeralDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigEphemeralDirectoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigEphemeralDirectoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference <a name="WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigEphemeralDirectoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd">PutGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd">ResetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcePd` <a name="PutGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd"></a>

```go
func PutGcePd(value WorkstationsWorkstationConfigEphemeralDirectoriesGcePd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `ResetGcePd` <a name="ResetGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetGcePd"></a>

```go
func ResetGcePd()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.resetMountPath"></a>

```go
func ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput">GcePdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcePd`<sup>Required</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePd"></a>

```go
func GcePd() WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference</a>

---

##### `GcePdInput`<sup>Optional</sup> <a name="GcePdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.gcePdInput"></a>

```go
func GcePdInput() WorkstationsWorkstationConfigEphemeralDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesGcePd">WorkstationsWorkstationConfigEphemeralDirectoriesGcePd</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigEphemeralDirectoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceBoostConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize">ResetPoolSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators"></a>

```go
func PutAccelerators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.putAccelerators.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetAccelerators"></a>

```go
func ResetAccelerators()
```

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetEnableNestedVirtualization"></a>

```go
func ResetEnableNestedVirtualization()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.resetPoolSize"></a>

```go
func ResetPoolSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput">PoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize">PoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.accelerators"></a>

```go
func Accelerators() WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList</a>

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.acceleratorsInput"></a>

```go
func AcceleratorsInput() interface{}
```

- *Type:* interface{}

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualizationInput"></a>

```go
func EnableNestedVirtualizationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSizeInput"></a>

```go
func PoolSizeInput() *f64
```

- *Type:* *f64

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.poolSize"></a>

```go
func PoolSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```go
func ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```go
func EnableConfidentialComputeInput() interface{}
```

- *Type:* interface{}

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostGceInstanceOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigHostGceInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs">PutBoostConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs">ResetBoostConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses">ResetDisablePublicIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh">ResetDisableSsh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize">ResetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes">ResetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags">ResetVmTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators"></a>

```go
func PutAccelerators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putAccelerators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBoostConfigs` <a name="PutBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs"></a>

```go
func PutBoostConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putBoostConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig"></a>

```go
func PutConfidentialInstanceConfig(value WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig"></a>

```go
func PutShieldedInstanceConfig(value WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetAccelerators"></a>

```go
func ResetAccelerators()
```

##### `ResetBoostConfigs` <a name="ResetBoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBoostConfigs"></a>

```go
func ResetBoostConfigs()
```

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig"></a>

```go
func ResetConfidentialInstanceConfig()
```

##### `ResetDisablePublicIpAddresses` <a name="ResetDisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses"></a>

```go
func ResetDisablePublicIpAddresses()
```

##### `ResetDisableSsh` <a name="ResetDisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisableSsh"></a>

```go
func ResetDisableSsh()
```

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetEnableNestedVirtualization"></a>

```go
func ResetEnableNestedVirtualization()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize"></a>

```go
func ResetPoolSize()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetServiceAccountScopes` <a name="ResetServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccountScopes"></a>

```go
func ResetServiceAccountScopes()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig"></a>

```go
func ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVmTags` <a name="ResetVmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.resetVmTags"></a>

```go
func ResetVmTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs">BoostConfigs</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput">BoostConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput">DisablePublicIpAddressesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput">DisableSshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput">PoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput">ServiceAccountScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput">VmTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses">DisablePublicIpAddresses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh">DisableSsh</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize">PoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags">VmTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.accelerators"></a>

```go
func Accelerators() WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList">WorkstationsWorkstationConfigHostGceInstanceAcceleratorsList</a>

---

##### `BoostConfigs`<sup>Required</sup> <a name="BoostConfigs" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigs"></a>

```go
func BoostConfigs() WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList">WorkstationsWorkstationConfigHostGceInstanceBoostConfigsList</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig"></a>

```go
func ConfidentialInstanceConfig() WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a>

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.acceleratorsInput"></a>

```go
func AcceleratorsInput() interface{}
```

- *Type:* interface{}

---

##### `BoostConfigsInput`<sup>Optional</sup> <a name="BoostConfigsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.boostConfigsInput"></a>

```go
func BoostConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput"></a>

```go
func ConfidentialInstanceConfigInput() WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `DisablePublicIpAddressesInput`<sup>Optional</sup> <a name="DisablePublicIpAddressesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput"></a>

```go
func DisablePublicIpAddressesInput() interface{}
```

- *Type:* interface{}

---

##### `DisableSshInput`<sup>Optional</sup> <a name="DisableSshInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSshInput"></a>

```go
func DisableSshInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualizationInput"></a>

```go
func EnableNestedVirtualizationInput() interface{}
```

- *Type:* interface{}

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput"></a>

```go
func PoolSizeInput() *f64
```

- *Type:* *f64

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceAccountScopesInput`<sup>Optional</sup> <a name="ServiceAccountScopesInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopesInput"></a>

```go
func ServiceAccountScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput"></a>

```go
func ShieldedInstanceConfigInput() WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VmTagsInput`<sup>Optional</sup> <a name="VmTagsInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTagsInput"></a>

```go
func VmTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DisablePublicIpAddresses`<sup>Required</sup> <a name="DisablePublicIpAddresses" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses"></a>

```go
func DisablePublicIpAddresses() interface{}
```

- *Type:* interface{}

---

##### `DisableSsh`<sup>Required</sup> <a name="DisableSsh" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disableSsh"></a>

```go
func DisableSsh() interface{}
```

- *Type:* interface{}

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() interface{}
```

- *Type:* interface{}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize"></a>

```go
func PoolSize() *f64
```

- *Type:* *f64

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServiceAccountScopes`<sup>Required</sup> <a name="ServiceAccountScopes" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountScopes"></a>

```go
func ServiceAccountScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `VmTags`<sup>Required</sup> <a name="VmTags" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.vmTags"></a>

```go
func VmTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---


### WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference <a name="WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```go
func ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```go
func ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```go
func ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```go
func EnableIntegrityMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```go
func EnableVtpmInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```go
func EnableIntegrityMonitoring() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```go
func EnableVtpm() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">WorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---


### WorkstationsWorkstationConfigHostOutputReference <a name="WorkstationsWorkstationConfigHostOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance">PutGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance">ResetGceInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGceInstance` <a name="PutGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance"></a>

```go
func PutGceInstance(value WorkstationsWorkstationConfigHostGceInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `ResetGceInstance` <a name="ResetGceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.resetGceInstance"></a>

```go
func ResetGceInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance">GceInstance</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput">GceInstanceInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GceInstance`<sup>Required</sup> <a name="GceInstance" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstance"></a>

```go
func GceInstance() WorkstationsWorkstationConfigHostGceInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstanceOutputReference">WorkstationsWorkstationConfigHostGceInstanceOutputReference</a>

---

##### `GceInstanceInput`<sup>Optional</sup> <a name="GceInstanceInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput"></a>

```go
func GceInstanceInput() WorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostGceInstance">WorkstationsWorkstationConfigHostGceInstance</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHostOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigHost">WorkstationsWorkstationConfigHost</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout">ResetArchiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb">ResetSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveTimeout` <a name="ResetArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetArchiveTimeout"></a>

```go
func ResetArchiveTimeout()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetReclaimPolicy"></a>

```go
func ResetReclaimPolicy()
```

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSizeGb"></a>

```go
func ResetSizeGb()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput">ArchiveTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout">ArchiveTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveTimeoutInput`<sup>Optional</sup> <a name="ArchiveTimeoutInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeoutInput"></a>

```go
func ArchiveTimeoutInput() *string
```

- *Type:* *string

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicyInput"></a>

```go
func ReclaimPolicyInput() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `ArchiveTimeout`<sup>Required</sup> <a name="ArchiveTimeout" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.archiveTimeout"></a>

```go
func ArchiveTimeout() *string
```

- *Type:* *string

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.reclaimPolicy"></a>

```go
func ReclaimPolicy() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigPersistentDirectoriesGceHd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb">ResetSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```

##### `ResetFsType` <a name="ResetFsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType"></a>

```go
func ResetFsType()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy"></a>

```go
func ResetReclaimPolicy()
```

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb"></a>

```go
func ResetSizeGb()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType">FsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput"></a>

```go
func FsTypeInput() *string
```

- *Type:* *string

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput"></a>

```go
func ReclaimPolicyInput() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType"></a>

```go
func FsType() *string
```

- *Type:* *string

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy"></a>

```go
func ReclaimPolicy() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---


### WorkstationsWorkstationConfigPersistentDirectoriesList <a name="WorkstationsWorkstationConfigPersistentDirectoriesList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigPersistentDirectoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigPersistentDirectoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigPersistentDirectoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigPersistentDirectoriesOutputReference <a name="WorkstationsWorkstationConfigPersistentDirectoriesOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigPersistentDirectoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigPersistentDirectoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd">PutGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd">PutGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd">ResetGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd">ResetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGceHd` <a name="PutGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd"></a>

```go
func PutGceHd(value WorkstationsWorkstationConfigPersistentDirectoriesGceHd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGceHd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `PutGcePd` <a name="PutGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd"></a>

```go
func PutGcePd(value WorkstationsWorkstationConfigPersistentDirectoriesGcePd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `ResetGceHd` <a name="ResetGceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGceHd"></a>

```go
func ResetGceHd()
```

##### `ResetGcePd` <a name="ResetGcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd"></a>

```go
func ResetGcePd()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath"></a>

```go
func ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd">GceHd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd">GcePd</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput">GceHdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput">GcePdInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GceHd`<sup>Required</sup> <a name="GceHd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHd"></a>

```go
func GceHd() WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGceHdOutputReference</a>

---

##### `GcePd`<sup>Required</sup> <a name="GcePd" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd"></a>

```go
func GcePd() WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">WorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a>

---

##### `GceHdInput`<sup>Optional</sup> <a name="GceHdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gceHdInput"></a>

```go
func GceHdInput() WorkstationsWorkstationConfigPersistentDirectoriesGceHd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGceHd">WorkstationsWorkstationConfigPersistentDirectoriesGceHd</a>

---

##### `GcePdInput`<sup>Optional</sup> <a name="GcePdInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput"></a>

```go
func GcePdInput() WorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesGcePd">WorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigReadinessChecksList <a name="WorkstationsWorkstationConfigReadinessChecksList" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigReadinessChecksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkstationsWorkstationConfigReadinessChecksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get"></a>

```go
func Get(index *f64) WorkstationsWorkstationConfigReadinessChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigReadinessChecksOutputReference <a name="WorkstationsWorkstationConfigReadinessChecksOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigReadinessChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkstationsWorkstationConfigReadinessChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigReadinessChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkstationsWorkstationConfigTimeoutsOutputReference <a name="WorkstationsWorkstationConfigTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/workstationsworkstationconfig"

workstationsworkstationconfig.NewWorkstationsWorkstationConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkstationsWorkstationConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfig.WorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



