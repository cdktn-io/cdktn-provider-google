# `computeServiceAttachment` Submodule <a name="`computeServiceAttachment` Submodule" id="@cdktn/provider-google.computeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServiceAttachment <a name="ComputeServiceAttachment" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachment(scope Construct, id *string, config ComputeServiceAttachmentConfig) ComputeServiceAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig">ComputeServiceAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig">ComputeServiceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists">PutConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists">ResetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists">ResetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetPropagatedConnectionLimit">ResetPropagatedConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections">ResetReconcileConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetSendPropagatedConnectionLimitIfZero">ResetSendPropagatedConnectionLimitIfZero</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetShowNatIps">ResetShowNatIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConsumerAcceptLists` <a name="PutConsumerAcceptLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists"></a>

```go
func PutConsumerAcceptLists(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts"></a>

```go
func PutTimeouts(value ComputeServiceAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

---

##### `ResetConsumerAcceptLists` <a name="ResetConsumerAcceptLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists"></a>

```go
func ResetConsumerAcceptLists()
```

##### `ResetConsumerRejectLists` <a name="ResetConsumerRejectLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists"></a>

```go
func ResetConsumerRejectLists()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames"></a>

```go
func ResetDomainNames()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPropagatedConnectionLimit` <a name="ResetPropagatedConnectionLimit" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetPropagatedConnectionLimit"></a>

```go
func ResetPropagatedConnectionLimit()
```

##### `ResetReconcileConnections` <a name="ResetReconcileConnections" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections"></a>

```go
func ResetReconcileConnections()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSendPropagatedConnectionLimitIfZero` <a name="ResetSendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetSendPropagatedConnectionLimitIfZero"></a>

```go
func ResetSendPropagatedConnectionLimitIfZero()
```

##### `ResetShowNatIps` <a name="ResetShowNatIps" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetShowNatIps"></a>

```go
func ResetShowNatIps()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeServiceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.ComputeServiceAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeServiceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeServiceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints">ConnectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.pscServiceAttachmentId">PscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList">ComputeServiceAttachmentPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput">ConnectionPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput">ConsumerAcceptListsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput">ConsumerRejectListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput">DomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput">NatSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimitInput">PropagatedConnectionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput">ReconcileConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZeroInput">SendPropagatedConnectionLimitIfZeroInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.showNatIpsInput">ShowNatIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput">TargetServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference">ConnectionPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets">NatSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimit">PropagatedConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections">ReconcileConnections</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero">SendPropagatedConnectionLimitIfZero</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.showNatIps">ShowNatIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService">TargetService</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectedEndpoints`<sup>Required</sup> <a name="ConnectedEndpoints" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints"></a>

```go
func ConnectedEndpoints() ComputeServiceAttachmentConnectedEndpointsList
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `ConsumerAcceptLists`<sup>Required</sup> <a name="ConsumerAcceptLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists"></a>

```go
func ConsumerAcceptLists() ComputeServiceAttachmentConsumerAcceptListsList
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `PscServiceAttachmentId`<sup>Required</sup> <a name="PscServiceAttachmentId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.pscServiceAttachmentId"></a>

```go
func PscServiceAttachmentId() ComputeServiceAttachmentPscServiceAttachmentIdList
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList">ComputeServiceAttachmentPscServiceAttachmentIdList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts"></a>

```go
func Timeouts() ComputeServiceAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `ConnectionPreferenceInput`<sup>Optional</sup> <a name="ConnectionPreferenceInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput"></a>

```go
func ConnectionPreferenceInput() *string
```

- *Type:* *string

---

##### `ConsumerAcceptListsInput`<sup>Optional</sup> <a name="ConsumerAcceptListsInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```go
func ConsumerAcceptListsInput() interface{}
```

- *Type:* interface{}

---

##### `ConsumerRejectListsInput`<sup>Optional</sup> <a name="ConsumerRejectListsInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput"></a>

```go
func ConsumerRejectListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput"></a>

```go
func DomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```go
func EnableProxyProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatSubnetsInput`<sup>Optional</sup> <a name="NatSubnetsInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput"></a>

```go
func NatSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropagatedConnectionLimitInput`<sup>Optional</sup> <a name="PropagatedConnectionLimitInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimitInput"></a>

```go
func PropagatedConnectionLimitInput() *f64
```

- *Type:* *f64

---

##### `ReconcileConnectionsInput`<sup>Optional</sup> <a name="ReconcileConnectionsInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```go
func ReconcileConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SendPropagatedConnectionLimitIfZeroInput`<sup>Optional</sup> <a name="SendPropagatedConnectionLimitIfZeroInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZeroInput"></a>

```go
func SendPropagatedConnectionLimitIfZeroInput() interface{}
```

- *Type:* interface{}

---

##### `ShowNatIpsInput`<sup>Optional</sup> <a name="ShowNatIpsInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.showNatIpsInput"></a>

```go
func ShowNatIpsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetServiceInput`<sup>Optional</sup> <a name="TargetServiceInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput"></a>

```go
func TargetServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference"></a>

```go
func ConnectionPreference() *string
```

- *Type:* *string

---

##### `ConsumerRejectLists`<sup>Required</sup> <a name="ConsumerRejectLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists"></a>

```go
func ConsumerRejectLists() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol"></a>

```go
func EnableProxyProtocol() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets"></a>

```go
func NatSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PropagatedConnectionLimit`<sup>Required</sup> <a name="PropagatedConnectionLimit" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```go
func PropagatedConnectionLimit() *f64
```

- *Type:* *f64

---

##### `ReconcileConnections`<sup>Required</sup> <a name="ReconcileConnections" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections"></a>

```go
func ReconcileConnections() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="SendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero"></a>

```go
func SendPropagatedConnectionLimitIfZero() interface{}
```

- *Type:* interface{}

---

##### `ShowNatIps`<sup>Required</sup> <a name="ShowNatIps" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.showNatIps"></a>

```go
func ShowNatIps() interface{}
```

- *Type:* interface{}

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService"></a>

```go
func TargetService() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServiceAttachmentConfig <a name="ComputeServiceAttachmentConfig" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionPreference: *string,
	EnableProxyProtocol: interface{},
	Name: *string,
	NatSubnets: *[]*string,
	TargetService: *string,
	ConsumerAcceptLists: interface{},
	ConsumerRejectLists: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	DomainNames: *[]*string,
	Id: *string,
	Project: *string,
	PropagatedConnectionLimit: *f64,
	ReconcileConnections: interface{},
	Region: *string,
	SendPropagatedConnectionLimitIfZero: interface{},
	ShowNatIps: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeServiceAttachment.ComputeServiceAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference">ConnectionPreference</a></code> | <code>*string</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets">NatSubnets</a></code> | <code>*[]*string</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService">TargetService</a></code> | <code>*string</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code>interface{}</code> | consumer_accept_lists block. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>*[]*string</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.propagatedConnectionLimit">PropagatedConnectionLimit</a></code> | <code>*f64</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections">ReconcileConnections</a></code> | <code>interface{}</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.sendPropagatedConnectionLimitIfZero">SendPropagatedConnectionLimitIfZero</a></code> | <code>interface{}</code> | Controls the behavior of propagated_connection_limit. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.showNatIps">ShowNatIps</a></code> | <code>interface{}</code> | NOTE: This field is temporarily non-functional due to an underlying API issue. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference"></a>

```go
ConnectionPreference *string
```

- *Type:* *string

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```go
EnableProxyProtocol interface{}
```

- *Type:* interface{}

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets"></a>

```go
NatSubnets *[]*string
```

- *Type:* *[]*string

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService"></a>

```go
TargetService *string
```

- *Type:* *string

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `ConsumerAcceptLists`<sup>Optional</sup> <a name="ConsumerAcceptLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```go
ConsumerAcceptLists interface{}
```

- *Type:* interface{}

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `ConsumerRejectLists`<sup>Optional</sup> <a name="ConsumerRejectLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```go
ConsumerRejectLists *[]*string
```

- *Type:* *[]*string

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#deletion_policy ComputeServiceAttachment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames"></a>

```go
DomainNames *[]*string
```

- *Type:* *[]*string

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `PropagatedConnectionLimit`<sup>Optional</sup> <a name="PropagatedConnectionLimit" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.propagatedConnectionLimit"></a>

```go
PropagatedConnectionLimit *f64
```

- *Type:* *f64

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250. To explicitly send a zero value, set 'send_propagated_connection_limit_if_zero = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#propagated_connection_limit ComputeServiceAttachment#propagated_connection_limit}

---

##### `ReconcileConnections`<sup>Optional</sup> <a name="ReconcileConnections" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```go
ReconcileConnections interface{}
```

- *Type:* interface{}

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `SendPropagatedConnectionLimitIfZero`<sup>Optional</sup> <a name="SendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.sendPropagatedConnectionLimitIfZero"></a>

```go
SendPropagatedConnectionLimitIfZero interface{}
```

- *Type:* interface{}

Controls the behavior of propagated_connection_limit.

When false, setting propagated_connection_limit to zero causes the provider to use to the API's default value.
When true, the provider will set propagated_connection_limit to zero.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#send_propagated_connection_limit_if_zero ComputeServiceAttachment#send_propagated_connection_limit_if_zero}

---

##### `ShowNatIps`<sup>Optional</sup> <a name="ShowNatIps" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.showNatIps"></a>

```go
ShowNatIps interface{}
```

- *Type:* interface{}

NOTE: This field is temporarily non-functional due to an underlying API issue.

Any value provided here will be ignored until the API issue is resolved, expected around 2026-03.
[If true, show NAT IPs of all connected endpoints.]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#show_nat_ips ComputeServiceAttachment#show_nat_ips}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts"></a>

```go
Timeouts ComputeServiceAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

### ComputeServiceAttachmentConnectedEndpoints <a name="ComputeServiceAttachmentConnectedEndpoints" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentConnectedEndpoints {

}
```


### ComputeServiceAttachmentConsumerAcceptLists <a name="ComputeServiceAttachmentConsumerAcceptLists" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentConsumerAcceptLists {
	ConnectionLimit: *f64,
	EndpointUrl: *string,
	NetworkUrl: *string,
	ProjectIdOrNum: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | The endpoint that is allowed to connect to this service attachment. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>*string</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```go
ConnectionLimit *f64
```

- *Type:* *f64

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#connection_limit ComputeServiceAttachment#connection_limit}

---

##### `EndpointUrl`<sup>Optional</sup> <a name="EndpointUrl" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.endpointUrl"></a>

```go
EndpointUrl *string
```

- *Type:* *string

The endpoint that is allowed to connect to this service attachment.

Only one of project_id_or_num, network_url and endpoint_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#endpoint_url ComputeServiceAttachment#endpoint_url}

---

##### `NetworkUrl`<sup>Optional</sup> <a name="NetworkUrl" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```go
NetworkUrl *string
```

- *Type:* *string

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#network_url ComputeServiceAttachment#network_url}

---

##### `ProjectIdOrNum`<sup>Optional</sup> <a name="ProjectIdOrNum" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```go
ProjectIdOrNum *string
```

- *Type:* *string

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#project_id_or_num ComputeServiceAttachment#project_id_or_num}

---

### ComputeServiceAttachmentPscServiceAttachmentId <a name="ComputeServiceAttachmentPscServiceAttachmentId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentPscServiceAttachmentId {

}
```


### ComputeServiceAttachmentTimeouts <a name="ComputeServiceAttachmentTimeouts" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

&computeserviceattachment.ComputeServiceAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServiceAttachmentConnectedEndpointsList <a name="ComputeServiceAttachmentConnectedEndpointsList" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConnectedEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeServiceAttachmentConnectedEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get"></a>

```go
func Get(index *f64) ComputeServiceAttachmentConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeServiceAttachmentConnectedEndpointsOutputReference <a name="ComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConnectedEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeServiceAttachmentConnectedEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">ConsumerNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps">NatIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">PropagatedConnectionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```go
func ConsumerNetwork() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps"></a>

```go
func NatIps() *[]*string
```

- *Type:* *[]*string

---

##### `PropagatedConnectionCount`<sup>Required</sup> <a name="PropagatedConnectionCount" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```go
func PropagatedConnectionCount() *f64
```

- *Type:* *f64

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeServiceAttachmentConnectedEndpoints
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a>

---


### ComputeServiceAttachmentConsumerAcceptListsList <a name="ComputeServiceAttachmentConsumerAcceptListsList" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConsumerAcceptListsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeServiceAttachmentConsumerAcceptListsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```go
func Get(index *f64) ComputeServiceAttachmentConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="ComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentConsumerAcceptListsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeServiceAttachmentConsumerAcceptListsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetEndpointUrl">ResetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">ResetNetworkUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">ResetProjectIdOrNum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointUrl` <a name="ResetEndpointUrl" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetEndpointUrl"></a>

```go
func ResetEndpointUrl()
```

##### `ResetNetworkUrl` <a name="ResetNetworkUrl" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```go
func ResetNetworkUrl()
```

##### `ResetProjectIdOrNum` <a name="ResetProjectIdOrNum" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```go
func ResetProjectIdOrNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrlInput">EndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">ProjectIdOrNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```go
func ConnectionLimitInput() *f64
```

- *Type:* *f64

---

##### `EndpointUrlInput`<sup>Optional</sup> <a name="EndpointUrlInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrlInput"></a>

```go
func EndpointUrlInput() *string
```

- *Type:* *string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```go
func NetworkUrlInput() *string
```

- *Type:* *string

---

##### `ProjectIdOrNumInput`<sup>Optional</sup> <a name="ProjectIdOrNumInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```go
func ProjectIdOrNumInput() *string
```

- *Type:* *string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```go
func ConnectionLimit() *f64
```

- *Type:* *f64

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```go
func NetworkUrl() *string
```

- *Type:* *string

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```go
func ProjectIdOrNum() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeServiceAttachmentPscServiceAttachmentIdList <a name="ComputeServiceAttachmentPscServiceAttachmentIdList" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentPscServiceAttachmentIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeServiceAttachmentPscServiceAttachmentIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.get"></a>

```go
func Get(index *f64) ComputeServiceAttachmentPscServiceAttachmentIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeServiceAttachmentPscServiceAttachmentIdOutputReference <a name="ComputeServiceAttachmentPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentPscServiceAttachmentIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeServiceAttachmentPscServiceAttachmentIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentId">ComputeServiceAttachmentPscServiceAttachmentId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeServiceAttachmentPscServiceAttachmentId
```

- *Type:* <a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentPscServiceAttachmentId">ComputeServiceAttachmentPscServiceAttachmentId</a>

---


### ComputeServiceAttachmentTimeoutsOutputReference <a name="ComputeServiceAttachmentTimeoutsOutputReference" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeserviceattachment"

computeserviceattachment.NewComputeServiceAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeServiceAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



