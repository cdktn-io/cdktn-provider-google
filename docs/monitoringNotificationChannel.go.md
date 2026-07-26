# `monitoringNotificationChannel` Submodule <a name="`monitoringNotificationChannel` Submodule" id="@cdktn/provider-google.monitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringNotificationChannel <a name="MonitoringNotificationChannel" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.NewMonitoringNotificationChannel(scope Construct, id *string, config MonitoringNotificationChannelConfig) MonitoringNotificationChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig">MonitoringNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig">MonitoringNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels">PutSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetSensitiveLabels">ResetSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSensitiveLabels` <a name="PutSensitiveLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels"></a>

```go
func PutSensitiveLabels(value MonitoringNotificationChannelSensitiveLabels)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts"></a>

```go
func PutTimeouts(value MonitoringNotificationChannelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSensitiveLabels` <a name="ResetSensitiveLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetSensitiveLabels"></a>

```go
func ResetSensitiveLabels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetUserLabels"></a>

```go
func ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitoringNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.MonitoringNotificationChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.MonitoringNotificationChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.MonitoringNotificationChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.MonitoringNotificationChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MonitoringNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitoringNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabels">SensitiveLabels</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference">MonitoringNotificationChannelSensitiveLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference">MonitoringNotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.verificationStatus">VerificationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabelsInput">SensitiveLabelsInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabelsInput">UserLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SensitiveLabels`<sup>Required</sup> <a name="SensitiveLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabels"></a>

```go
func SensitiveLabels() MonitoringNotificationChannelSensitiveLabelsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference">MonitoringNotificationChannelSensitiveLabelsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeouts"></a>

```go
func Timeouts() MonitoringNotificationChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference">MonitoringNotificationChannelTimeoutsOutputReference</a>

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.verificationStatus"></a>

```go
func VerificationStatus() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SensitiveLabelsInput`<sup>Optional</sup> <a name="SensitiveLabelsInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabelsInput"></a>

```go
func SensitiveLabelsInput() MonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabelsInput"></a>

```go
func UserLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabels"></a>

```go
func UserLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringNotificationChannelConfig <a name="MonitoringNotificationChannelConfig" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

&monitoringnotificationchannel.MonitoringNotificationChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Enabled: interface{},
	ForceDelete: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	SensitiveLabels: github.com/cdktn-io/cdktn-provider-google-go/google/v20.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts,
	UserLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.type">Type</a></code> | <code>*string</code> | The type of the notification channel. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.description">Description</a></code> | <code>*string</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.sensitiveLabels">SensitiveLabels</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.userLabels">UserLabels</a></code> | <code>*map[string]*string</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#type MonitoringNotificationChannel#type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#deletion_policy MonitoringNotificationChannel#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#description MonitoringNotificationChannel#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#display_name MonitoringNotificationChannel#display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#enabled MonitoringNotificationChannel#enabled}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#force_delete MonitoringNotificationChannel#force_delete}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#labels MonitoringNotificationChannel#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}.

---

##### `SensitiveLabels`<sup>Optional</sup> <a name="SensitiveLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.sensitiveLabels"></a>

```go
SensitiveLabels MonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#sensitive_labels MonitoringNotificationChannel#sensitive_labels}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.timeouts"></a>

```go
Timeouts MonitoringNotificationChannelTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#timeouts MonitoringNotificationChannel#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.userLabels"></a>

```go
UserLabels *map[string]*string
```

- *Type:* *map[string]*string

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#user_labels MonitoringNotificationChannel#user_labels}

---

### MonitoringNotificationChannelSensitiveLabels <a name="MonitoringNotificationChannelSensitiveLabels" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

&monitoringnotificationchannel.MonitoringNotificationChannelSensitiveLabels {
	AuthToken: *string,
	AuthTokenWo: *string,
	AuthTokenWoVersion: *string,
	Password: *string,
	PasswordWo: *string,
	PasswordWoVersion: *string,
	ServiceKey: *string,
	ServiceKeyWo: *string,
	ServiceKeyWoVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authToken">AuthToken</a></code> | <code>*string</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authTokenWo">AuthTokenWo</a></code> | <code>*string</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authTokenWoVersion">AuthTokenWoVersion</a></code> | <code>*string</code> | Triggers update of 'auth_token_wo' write-only. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.password">Password</a></code> | <code>*string</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | Triggers update of 'password_wo' write-only. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKeyWo">ServiceKeyWo</a></code> | <code>*string</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKeyWoVersion">ServiceKeyWoVersion</a></code> | <code>*string</code> | Triggers update of 'service_key_wo' write-only. |

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authToken"></a>

```go
AuthToken *string
```

- *Type:* *string

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#auth_token MonitoringNotificationChannel#auth_token}

---

##### `AuthTokenWo`<sup>Optional</sup> <a name="AuthTokenWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authTokenWo"></a>

```go
AuthTokenWo *string
```

- *Type:* *string

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#auth_token_wo MonitoringNotificationChannel#auth_token_wo}

---

##### `AuthTokenWoVersion`<sup>Optional</sup> <a name="AuthTokenWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authTokenWoVersion"></a>

```go
AuthTokenWoVersion *string
```

- *Type:* *string

Triggers update of 'auth_token_wo' write-only.

Increment this value when an update to 'auth_token_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#auth_token_wo_version MonitoringNotificationChannel#auth_token_wo_version}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.password"></a>

```go
Password *string
```

- *Type:* *string

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#password MonitoringNotificationChannel#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#password_wo MonitoringNotificationChannel#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.passwordWoVersion"></a>

```go
PasswordWoVersion *string
```

- *Type:* *string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#password_wo_version MonitoringNotificationChannel#password_wo_version}

---

##### `ServiceKey`<sup>Optional</sup> <a name="ServiceKey" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKey"></a>

```go
ServiceKey *string
```

- *Type:* *string

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#service_key MonitoringNotificationChannel#service_key}

---

##### `ServiceKeyWo`<sup>Optional</sup> <a name="ServiceKeyWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKeyWo"></a>

```go
ServiceKeyWo *string
```

- *Type:* *string

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#service_key_wo MonitoringNotificationChannel#service_key_wo}

---

##### `ServiceKeyWoVersion`<sup>Optional</sup> <a name="ServiceKeyWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKeyWoVersion"></a>

```go
ServiceKeyWoVersion *string
```

- *Type:* *string

Triggers update of 'service_key_wo' write-only.

Increment this value when an update to 'service_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#service_key_wo_version MonitoringNotificationChannel#service_key_wo_version}

---

### MonitoringNotificationChannelTimeouts <a name="MonitoringNotificationChannelTimeouts" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

&monitoringnotificationchannel.MonitoringNotificationChannelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#create MonitoringNotificationChannel#create}. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#delete MonitoringNotificationChannel#delete}. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#update MonitoringNotificationChannel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#create MonitoringNotificationChannel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#delete MonitoringNotificationChannel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/monitoring_notification_channel#update MonitoringNotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringNotificationChannelSensitiveLabelsOutputReference <a name="MonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.NewMonitoringNotificationChannelSensitiveLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringNotificationChannelSensitiveLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWo">ResetAuthTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWoVersion">ResetAuthTokenWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey">ResetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWo">ResetServiceKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWoVersion">ResetServiceKeyWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken"></a>

```go
func ResetAuthToken()
```

##### `ResetAuthTokenWo` <a name="ResetAuthTokenWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWo"></a>

```go
func ResetAuthTokenWo()
```

##### `ResetAuthTokenWoVersion` <a name="ResetAuthTokenWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthTokenWoVersion"></a>

```go
func ResetAuthTokenWoVersion()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWo"></a>

```go
func ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPasswordWoVersion"></a>

```go
func ResetPasswordWoVersion()
```

##### `ResetServiceKey` <a name="ResetServiceKey" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey"></a>

```go
func ResetServiceKey()
```

##### `ResetServiceKeyWo` <a name="ResetServiceKeyWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWo"></a>

```go
func ResetServiceKeyWo()
```

##### `ResetServiceKeyWoVersion` <a name="ResetServiceKeyWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKeyWoVersion"></a>

```go
func ResetServiceKeyWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput">AuthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoInput">AuthTokenWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersionInput">AuthTokenWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput">ServiceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoInput">ServiceKeyWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersionInput">ServiceKeyWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">AuthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWo">AuthTokenWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersion">AuthTokenWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWo">ServiceKeyWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersion">ServiceKeyWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput"></a>

```go
func AuthTokenInput() *string
```

- *Type:* *string

---

##### `AuthTokenWoInput`<sup>Optional</sup> <a name="AuthTokenWoInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoInput"></a>

```go
func AuthTokenWoInput() *string
```

- *Type:* *string

---

##### `AuthTokenWoVersionInput`<sup>Optional</sup> <a name="AuthTokenWoVersionInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersionInput"></a>

```go
func AuthTokenWoVersionInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersionInput"></a>

```go
func PasswordWoVersionInput() *string
```

- *Type:* *string

---

##### `ServiceKeyInput`<sup>Optional</sup> <a name="ServiceKeyInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput"></a>

```go
func ServiceKeyInput() *string
```

- *Type:* *string

---

##### `ServiceKeyWoInput`<sup>Optional</sup> <a name="ServiceKeyWoInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoInput"></a>

```go
func ServiceKeyWoInput() *string
```

- *Type:* *string

---

##### `ServiceKeyWoVersionInput`<sup>Optional</sup> <a name="ServiceKeyWoVersionInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersionInput"></a>

```go
func ServiceKeyWoVersionInput() *string
```

- *Type:* *string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```go
func AuthToken() *string
```

- *Type:* *string

---

##### `AuthTokenWo`<sup>Required</sup> <a name="AuthTokenWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWo"></a>

```go
func AuthTokenWo() *string
```

- *Type:* *string

---

##### `AuthTokenWoVersion`<sup>Required</sup> <a name="AuthTokenWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersion"></a>

```go
func AuthTokenWoVersion() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWo"></a>

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersion"></a>

```go
func PasswordWoVersion() *string
```

- *Type:* *string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `ServiceKeyWo`<sup>Required</sup> <a name="ServiceKeyWo" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWo"></a>

```go
func ServiceKeyWo() *string
```

- *Type:* *string

---

##### `ServiceKeyWoVersion`<sup>Required</sup> <a name="ServiceKeyWoVersion" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersion"></a>

```go
func ServiceKeyWoVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

---


### MonitoringNotificationChannelTimeoutsOutputReference <a name="MonitoringNotificationChannelTimeoutsOutputReference" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/monitoringnotificationchannel"

monitoringnotificationchannel.NewMonitoringNotificationChannelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringNotificationChannelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



