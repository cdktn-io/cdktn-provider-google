# `iamWorkloadIdentityPool` Submodule <a name="`iamWorkloadIdentityPool` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPool <a name="IamWorkloadIdentityPool" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPool(scope Construct, id *string, config IamWorkloadIdentityPoolConfig) IamWorkloadIdentityPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules">PutAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig">PutInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig">PutInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetAttestationRules">ResetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig">ResetInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineTrustConfig">ResetInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationRules` <a name="PutAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules"></a>

```go
func PutAttestationRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInlineCertificateIssuanceConfig` <a name="PutInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig"></a>

```go
func PutInlineCertificateIssuanceConfig(value IamWorkloadIdentityPoolInlineCertificateIssuanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `PutInlineTrustConfig` <a name="PutInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig"></a>

```go
func PutInlineTrustConfig(value IamWorkloadIdentityPoolInlineTrustConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts"></a>

```go
func PutTimeouts(value IamWorkloadIdentityPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---

##### `ResetAttestationRules` <a name="ResetAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetAttestationRules"></a>

```go
func ResetAttestationRules()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId"></a>

```go
func ResetId()
```

##### `ResetInlineCertificateIssuanceConfig` <a name="ResetInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig"></a>

```go
func ResetInlineCertificateIssuanceConfig()
```

##### `ResetInlineTrustConfig` <a name="ResetInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineTrustConfig"></a>

```go
func ResetInlineTrustConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetMode"></a>

```go
func ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.IamWorkloadIdentityPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.IamWorkloadIdentityPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.IamWorkloadIdentityPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.IamWorkloadIdentityPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamWorkloadIdentityPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRules">AttestationRules</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList">IamWorkloadIdentityPoolAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference">IamWorkloadIdentityPoolInlineTrustConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRulesInput">AttestationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput">InlineCertificateIssuanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfigInput">InlineTrustConfigInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationRules`<sup>Required</sup> <a name="AttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRules"></a>

```go
func AttestationRules() IamWorkloadIdentityPoolAttestationRulesList
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList">IamWorkloadIdentityPoolAttestationRulesList</a>

---

##### `InlineCertificateIssuanceConfig`<sup>Required</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```go
func InlineCertificateIssuanceConfig() IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a>

---

##### `InlineTrustConfig`<sup>Required</sup> <a name="InlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```go
func InlineTrustConfig() IamWorkloadIdentityPoolInlineTrustConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference">IamWorkloadIdentityPoolInlineTrustConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts"></a>

```go
func Timeouts() IamWorkloadIdentityPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a>

---

##### `AttestationRulesInput`<sup>Optional</sup> <a name="AttestationRulesInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRulesInput"></a>

```go
func AttestationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InlineCertificateIssuanceConfigInput`<sup>Optional</sup> <a name="InlineCertificateIssuanceConfigInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput"></a>

```go
func InlineCertificateIssuanceConfigInput() IamWorkloadIdentityPoolInlineCertificateIssuanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `InlineTrustConfigInput`<sup>Optional</sup> <a name="InlineTrustConfigInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfigInput"></a>

```go
func InlineTrustConfigInput() IamWorkloadIdentityPoolInlineTrustConfig
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```go
func WorkloadIdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```go
func WorkloadIdentityPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolAttestationRules <a name="IamWorkloadIdentityPoolAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolAttestationRules {
	GoogleCloudResource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.property.googleCloudResource">GoogleCloudResource</a></code> | <code>*string</code> | A single workload operating on Google Cloud. For example: '//run.googleapis.com/projects/123/type/Service/*'. |

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.property.googleCloudResource"></a>

```go
GoogleCloudResource *string
```

- *Type:* *string

A single workload operating on Google Cloud. For example: '//run.googleapis.com/projects/123/type/Service/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#google_cloud_resource IamWorkloadIdentityPool#google_cloud_resource}

---

### IamWorkloadIdentityPoolConfig <a name="IamWorkloadIdentityPoolConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	WorkloadIdentityPoolId: *string,
	AttestationRules: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Disabled: interface{},
	DisplayName: *string,
	Id: *string,
	InlineCertificateIssuanceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig,
	InlineTrustConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig,
	Mode: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.attestationRules">AttestationRules</a></code> | <code>interface{}</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description">Description</a></code> | <code>*string</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the pool is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | inline_certificate_issuance_config block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | inline_trust_config block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.mode">Mode</a></code> | <code>*string</code> | The mode for the pool is operating in. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```go
WorkloadIdentityPoolId *string
```

- *Type:* *string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#workload_identity_pool_id IamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `AttestationRules`<sup>Optional</sup> <a name="AttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.attestationRules"></a>

```go
AttestationRules interface{}
```

- *Type:* interface{}

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#attestation_rules IamWorkloadIdentityPool#attestation_rules}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#deletion_policy IamWorkloadIdentityPool#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#description IamWorkloadIdentityPool#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#disabled IamWorkloadIdentityPool#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#display_name IamWorkloadIdentityPool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineCertificateIssuanceConfig`<sup>Optional</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig"></a>

```go
InlineCertificateIssuanceConfig IamWorkloadIdentityPoolInlineCertificateIssuanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

inline_certificate_issuance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#inline_certificate_issuance_config IamWorkloadIdentityPool#inline_certificate_issuance_config}

---

##### `InlineTrustConfig`<sup>Optional</sup> <a name="InlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineTrustConfig"></a>

```go
InlineTrustConfig IamWorkloadIdentityPoolInlineTrustConfig
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

inline_trust_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#inline_trust_config IamWorkloadIdentityPool#inline_trust_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode for the pool is operating in.

Pools with an unspecified mode will operate as if they
are in 'FEDERATION_ONLY' mode.

~> **Note** This field cannot be changed after the Workload Identity Pool is created. While
'terraform plan' may show an update if you change this field's value, 'terraform apply'
**will fail with an API error** (such as 'Error 400: Attempted to update an immutable field.').
To specify a different 'mode', please create a new Workload Identity Pool resource.

* 'FEDERATION_ONLY': Pools can only be used for federating external workload identities into
  Google Cloud. Unless otherwise noted, no structure or format constraints are applied to
  workload identities in a 'FEDERATION_ONLY' mode pool, and you may not create any resources
  within the pool besides providers.
* 'TRUST_DOMAIN': Pools can be used to assign identities to Google Cloud workloads. All
  identities within a 'TRUST_DOMAIN' mode pool must consist of a single namespace and individual
  workload identifier. The subject identifier for all identities must conform to the following
  format: 'ns/<namespace>/sa/<workload_identifier>'.
  'google_iam_workload_identity_pool_provider's cannot be created within 'TRUST_DOMAIN'
  mode pools.
* 'SYSTEM_TRUST_DOMAIN': Pools are managed by Google Cloud services. Neither
  'google_iam_workload_identity_pool_namespace's nor 'google_iam_workload_identity_pool_provider's
  can be created within 'SYSTEM_TRUST_DOMAIN' mode pools. All identities within a
  'SYSTEM_TRUST_DOMAIN' mode pool are in one of the following formats:

  * 'spiffe://<trust-domain>/ns/<kubernetes-namespace>/sa/<kubernetes-service-account>'
  * 'spiffe://<trust-domain>/resources/<resource-scope>/<resource-name>' Possible values: ["FEDERATION_ONLY", "TRUST_DOMAIN", "SYSTEM_TRUST_DOMAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#mode IamWorkloadIdentityPool#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts"></a>

```go
Timeouts IamWorkloadIdentityPoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#timeouts IamWorkloadIdentityPool#timeouts}

---

### IamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="IamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig {
	CaPools: *map[string]*string,
	KeyAlgorithm: *string,
	Lifetime: *string,
	RotationWindowPercentage: *f64,
	UseDefaultSharedCa: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools">CaPools</a></code> | <code>*map[string]*string</code> | A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | Key algorithm to use when generating the key pair. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime">Lifetime</a></code> | <code>*string</code> | Lifetime of the workload certificates issued by the CA pool in seconds. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>*f64</code> | Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.useDefaultSharedCa">UseDefaultSharedCa</a></code> | <code>interface{}</code> | If set to true, the trust domain will utilize the GCP-provisioned default CA. |

---

##### `CaPools`<sup>Optional</sup> <a name="CaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools"></a>

```go
CaPools *map[string]*string
```

- *Type:* *map[string]*string

A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value.

* **Value format:** A valid CA pool resource path format like:
  'projects/{project}/locations/{location}/caPools/{ca_pool}'
* **Region Matching:** Workloads are ONLY issued certificates from CA pools within the
  same region. Also the CA pool region (in value) must match the workload's region (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#ca_pools IamWorkloadIdentityPool#ca_pools}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

Key algorithm to use when generating the key pair.

This key pair will be used to create
the certificate. If unspecified, this will default to 'ECDSA_P256'.

* 'RSA_2048': Specifies RSA with a 2048-bit modulus.
* 'RSA_3072': Specifies RSA with a 3072-bit modulus.
* 'RSA_4096': Specifies RSA with a 4096-bit modulus.
* 'ECDSA_P256': Specifies ECDSA with curve P256.
* 'ECDSA_P384': Specifies ECDSA with curve P384. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096", "ECDSA_P256", "ECDSA_P384"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#key_algorithm IamWorkloadIdentityPool#key_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime"></a>

```go
Lifetime *string
```

- *Type:* *string

Lifetime of the workload certificates issued by the CA pool in seconds.

Must be between
'86400s' (24 hours) to '2592000s' (30 days), ends in the suffix "'s'" (indicating seconds)
and is preceded by the number of seconds. If unspecified, this will be defaulted to
'86400s' (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#lifetime IamWorkloadIdentityPool#lifetime}

---

##### `RotationWindowPercentage`<sup>Optional</sup> <a name="RotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```go
RotationWindowPercentage *f64
```

- *Type:* *f64

Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime.

Must be between '50' - '80'. If unspecified, this will be defaulted
to '50'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#rotation_window_percentage IamWorkloadIdentityPool#rotation_window_percentage}

---

##### `UseDefaultSharedCa`<sup>Optional</sup> <a name="UseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.useDefaultSharedCa"></a>

```go
UseDefaultSharedCa interface{}
```

- *Type:* interface{}

If set to true, the trust domain will utilize the GCP-provisioned default CA.

A default
CA in the same region as the workload will be selected to issue the certificate. Enabling
this will clear any existing 'ca_pools' configuration to provision the certificates.

~> **Note** This field is mutually exclusive with 'ca_pools'. If this flag is enabled,
certificates will be automatically provisioned from the default shared CAs. This flag should
not be set if you want to use your own CA pools to provision the certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#use_default_shared_ca IamWorkloadIdentityPool#use_default_shared_ca}

---

### IamWorkloadIdentityPoolInlineTrustConfig <a name="IamWorkloadIdentityPoolInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolInlineTrustConfig {
	AdditionalTrustBundles: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code>interface{}</code> | additional_trust_bundles block. |

---

##### `AdditionalTrustBundles`<sup>Optional</sup> <a name="AdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles"></a>

```go
AdditionalTrustBundles interface{}
```

- *Type:* interface{}

additional_trust_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#additional_trust_bundles IamWorkloadIdentityPool#additional_trust_bundles}

---

### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles {
	TrustAnchors: interface{},
	TrustDomain: *string,
	TrustDefaultSharedCa: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors">TrustAnchors</a></code> | <code>interface{}</code> | trust_anchors block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain">TrustDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_domain IamWorkloadIdentityPool#trust_domain}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDefaultSharedCa">TrustDefaultSharedCa</a></code> | <code>interface{}</code> | If set to True, the trust bundle will include the private ca managed identity regional root public certificates. |

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors"></a>

```go
TrustAnchors interface{}
```

- *Type:* interface{}

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_anchors IamWorkloadIdentityPool#trust_anchors}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain"></a>

```go
TrustDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_domain IamWorkloadIdentityPool#trust_domain}.

---

##### `TrustDefaultSharedCa`<sup>Optional</sup> <a name="TrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDefaultSharedCa"></a>

```go
TrustDefaultSharedCa interface{}
```

- *Type:* interface{}

If set to True, the trust bundle will include the private ca managed identity regional root public certificates.

~> **Note** 'trust_default_shared_ca' is only supported for managed identity trust domain
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_default_shared_ca IamWorkloadIdentityPool#trust_default_shared_ca}

---

### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors {
	PemCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate"></a>

```go
PemCertificate *string
```

- *Type:* *string

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#pem_certificate IamWorkloadIdentityPool#pem_certificate}

---

### IamWorkloadIdentityPoolTimeouts <a name="IamWorkloadIdentityPoolTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

&iamworkloadidentitypool.IamWorkloadIdentityPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolAttestationRulesList <a name="IamWorkloadIdentityPoolAttestationRulesList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolAttestationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamWorkloadIdentityPoolAttestationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get"></a>

```go
func Get(index *f64) IamWorkloadIdentityPoolAttestationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolAttestationRulesOutputReference <a name="IamWorkloadIdentityPoolAttestationRulesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolAttestationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamWorkloadIdentityPoolAttestationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResourceInput">GoogleCloudResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource">GoogleCloudResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoogleCloudResourceInput`<sup>Optional</sup> <a name="GoogleCloudResourceInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```go
func GoogleCloudResourceInput() *string
```

- *Type:* *string

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource"></a>

```go
func GoogleCloudResource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetCaPools">ResetCaPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage">ResetRotationWindowPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetUseDefaultSharedCa">ResetUseDefaultSharedCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaPools` <a name="ResetCaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetCaPools"></a>

```go
func ResetCaPools()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm"></a>

```go
func ResetKeyAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```

##### `ResetRotationWindowPercentage` <a name="ResetRotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage"></a>

```go
func ResetRotationWindowPercentage()
```

##### `ResetUseDefaultSharedCa` <a name="ResetUseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetUseDefaultSharedCa"></a>

```go
func ResetUseDefaultSharedCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput">CaPoolsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput">RotationWindowPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCaInput">UseDefaultSharedCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">CaPools</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">Lifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa">UseDefaultSharedCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaPoolsInput`<sup>Optional</sup> <a name="CaPoolsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput"></a>

```go
func CaPoolsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *string
```

- *Type:* *string

---

##### `RotationWindowPercentageInput`<sup>Optional</sup> <a name="RotationWindowPercentageInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput"></a>

```go
func RotationWindowPercentageInput() *f64
```

- *Type:* *f64

---

##### `UseDefaultSharedCaInput`<sup>Optional</sup> <a name="UseDefaultSharedCaInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCaInput"></a>

```go
func UseDefaultSharedCaInput() interface{}
```

- *Type:* interface{}

---

##### `CaPools`<sup>Required</sup> <a name="CaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```go
func CaPools() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```go
func Lifetime() *string
```

- *Type:* *string

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```go
func RotationWindowPercentage() *f64
```

- *Type:* *f64

---

##### `UseDefaultSharedCa`<sup>Required</sup> <a name="UseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa"></a>

```go
func UseDefaultSharedCa() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolInlineCertificateIssuanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```go
func Get(index *f64) IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors">PutTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resetTrustDefaultSharedCa">ResetTrustDefaultSharedCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustAnchors` <a name="PutTrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors"></a>

```go
func PutTrustAnchors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTrustDefaultSharedCa` <a name="ResetTrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resetTrustDefaultSharedCa"></a>

```go
func ResetTrustDefaultSharedCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput">TrustAnchorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCaInput">TrustDefaultSharedCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput">TrustDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa">TrustDefaultSharedCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">TrustDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```go
func TrustAnchors() IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `TrustAnchorsInput`<sup>Optional</sup> <a name="TrustAnchorsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput"></a>

```go
func TrustAnchorsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustDefaultSharedCaInput`<sup>Optional</sup> <a name="TrustDefaultSharedCaInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCaInput"></a>

```go
func TrustDefaultSharedCaInput() interface{}
```

- *Type:* interface{}

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput"></a>

```go
func TrustDomainInput() *string
```

- *Type:* *string

---

##### `TrustDefaultSharedCa`<sup>Required</sup> <a name="TrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa"></a>

```go
func TrustDefaultSharedCa() interface{}
```

- *Type:* interface{}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```go
func TrustDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```go
func Get(index *f64) IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```go
func PemCertificateInput() *string
```

- *Type:* *string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```go
func PemCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolInlineTrustConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolInlineTrustConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles">PutAdditionalTrustBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles">ResetAdditionalTrustBundles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalTrustBundles` <a name="PutAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles"></a>

```go
func PutAdditionalTrustBundles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalTrustBundles` <a name="ResetAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles"></a>

```go
func ResetAdditionalTrustBundles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput">AdditionalTrustBundlesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalTrustBundles`<sup>Required</sup> <a name="AdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```go
func AdditionalTrustBundles() IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `AdditionalTrustBundlesInput`<sup>Optional</sup> <a name="AdditionalTrustBundlesInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput"></a>

```go
func AdditionalTrustBundlesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IamWorkloadIdentityPoolInlineTrustConfig
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---


### IamWorkloadIdentityPoolTimeoutsOutputReference <a name="IamWorkloadIdentityPoolTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/iamworkloadidentitypool"

iamworkloadidentitypool.NewIamWorkloadIdentityPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamWorkloadIdentityPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



