# `cloudSecurityComplianceFrameworkDeployment` Submodule <a name="`cloudSecurityComplianceFrameworkDeployment` Submodule" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSecurityComplianceFrameworkDeployment <a name="CloudSecurityComplianceFrameworkDeployment" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment google_cloud_security_compliance_framework_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeployment(scope Construct, id *string, config CloudSecurityComplianceFrameworkDeploymentConfig) CloudSecurityComplianceFrameworkDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig">CloudSecurityComplianceFrameworkDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig">CloudSecurityComplianceFrameworkDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata">PutCloudControlMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putFramework">PutFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig">PutTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudControlMetadata` <a name="PutCloudControlMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata"></a>

```go
func PutCloudControlMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFramework` <a name="PutFramework" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putFramework"></a>

```go
func PutFramework(value CloudSecurityComplianceFrameworkDeploymentFramework)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putFramework.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `PutTargetResourceConfig` <a name="PutTargetResourceConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig"></a>

```go
func PutTargetResourceConfig(value CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putTimeouts"></a>

```go
func PutTimeouts(value CloudSecurityComplianceFrameworkDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts">CloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudSecurityComplianceFrameworkDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudSecurityComplianceFrameworkDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudSecurityComplianceFrameworkDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences">CloudControlDeploymentReferences</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata">CloudControlMetadata</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.computedTargetResource">ComputedTargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.deploymentState">DeploymentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.framework">Framework</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig">TargetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName">TargetResourceDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput">CloudControlMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput">FrameworkDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.frameworkInput">FrameworkInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput">TargetResourceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId">FrameworkDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudControlDeploymentReferences`<sup>Required</sup> <a name="CloudControlDeploymentReferences" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences"></a>

```go
func CloudControlDeploymentReferences() CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a>

---

##### `CloudControlMetadata`<sup>Required</sup> <a name="CloudControlMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata"></a>

```go
func CloudControlMetadata() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a>

---

##### `ComputedTargetResource`<sup>Required</sup> <a name="ComputedTargetResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.computedTargetResource"></a>

```go
func ComputedTargetResource() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeploymentState`<sup>Required</sup> <a name="DeploymentState" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.deploymentState"></a>

```go
func DeploymentState() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.framework"></a>

```go
func Framework() CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetResourceConfig`<sup>Required</sup> <a name="TargetResourceConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig"></a>

```go
func TargetResourceConfig() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a>

---

##### `TargetResourceDisplayName`<sup>Required</sup> <a name="TargetResourceDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName"></a>

```go
func TargetResourceDisplayName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.timeouts"></a>

```go
func Timeouts() CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CloudControlMetadataInput`<sup>Optional</sup> <a name="CloudControlMetadataInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput"></a>

```go
func CloudControlMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FrameworkDeploymentIdInput`<sup>Optional</sup> <a name="FrameworkDeploymentIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput"></a>

```go
func FrameworkDeploymentIdInput() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.frameworkInput"></a>

```go
func FrameworkInput() CloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TargetResourceConfigInput`<sup>Optional</sup> <a name="TargetResourceConfigInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput"></a>

```go
func TargetResourceConfigInput() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FrameworkDeploymentId`<sup>Required</sup> <a name="FrameworkDeploymentId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId"></a>

```go
func FrameworkDeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences {

}
```


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata {
	CloudControlDetails: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails,
	EnforcementMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails">CloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT. |

---

##### `CloudControlDetails`<sup>Required</sup> <a name="CloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails"></a>

```go
CloudControlDetails CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#cloud_control_details CloudSecurityComplianceFrameworkDeployment#cloud_control_details}

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#enforcement_mode CloudSecurityComplianceFrameworkDeployment#enforcement_mode}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails {
	MajorRevisionId: *string,
	Name: *string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name">Name</a></code> | <code>*string</code> | The name of the CloudControl in the format: "{parent}/locations/{location}/cloudControls/{cloud-control}". |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId"></a>

```go
MajorRevisionId *string
```

- *Type:* *string

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#major_revision_id CloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the CloudControl in the format: "{parent}/locations/{location}/cloudControls/{cloud-control}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#name CloudSecurityComplianceFrameworkDeployment#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#parameters CloudSecurityComplianceFrameworkDeployment#parameters}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters {
	Name: *string,
	ParameterValue: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name">Name</a></code> | <code>*string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#name CloudSecurityComplianceFrameworkDeployment#name}

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue"></a>

```go
ParameterValue CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#parameter_value CloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue {
	BoolValue: interface{},
	NumberValue: *f64,
	OneofValue: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue,
	StringListValue: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue">NumberValue</a></code> | <code>*f64</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue">OneofValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Represents a string value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#bool_value CloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```go
NumberValue *f64
```

- *Type:* *f64

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#number_value CloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `OneofValue`<sup>Optional</sup> <a name="OneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```go
OneofValue CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#oneof_value CloudSecurityComplianceFrameworkDeployment#oneof_value}

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```go
StringListValue CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#string_list_value CloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#string_value CloudSecurityComplianceFrameworkDeployment#string_value}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue {
	Name: *string,
	ParameterValue: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name">Name</a></code> | <code>*string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#name CloudSecurityComplianceFrameworkDeployment#name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```go
ParameterValue CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#parameter_value CloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue {
	BoolValue: interface{},
	NumberValue: *f64,
	StringListValue: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">NumberValue</a></code> | <code>*f64</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Represents a string value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#bool_value CloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```go
NumberValue *f64
```

- *Type:* *f64

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#number_value CloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```go
StringListValue CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#string_list_value CloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#string_value CloudSecurityComplianceFrameworkDeployment#string_value}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">Values</a></code> | <code>*[]*string</code> | The strings in the list. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#values CloudSecurityComplianceFrameworkDeployment#values}

---

### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values">Values</a></code> | <code>*[]*string</code> | The strings in the list. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#values CloudSecurityComplianceFrameworkDeployment#values}

---

### CloudSecurityComplianceFrameworkDeploymentConfig <a name="CloudSecurityComplianceFrameworkDeploymentConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudControlMetadata: interface{},
	Framework: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework,
	FrameworkDeploymentId: *string,
	TargetResourceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Location: *string,
	Organization: *string,
	Parent: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata">CloudControlMetadata</a></code> | <code>interface{}</code> | cloud_control_metadata block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.framework">Framework</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a></code> | framework block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId">FrameworkDeploymentId</a></code> | <code>*string</code> | User provided identifier. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig">TargetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | target_resource_config block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.description">Description</a></code> | <code>*string</code> | User provided description of the Framework deployment. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#id CloudSecurityComplianceFrameworkDeployment#id}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.organization">Organization</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent resource in which to create the resource. Must be in one of the following formats: * 'projects/{{project}}' * 'organizations/{{organization}}'. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts">CloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudControlMetadata`<sup>Required</sup> <a name="CloudControlMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata"></a>

```go
CloudControlMetadata interface{}
```

- *Type:* interface{}

cloud_control_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#cloud_control_metadata CloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.framework"></a>

```go
Framework CloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a>

framework block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#framework CloudSecurityComplianceFrameworkDeployment#framework}

---

##### `FrameworkDeploymentId`<sup>Required</sup> <a name="FrameworkDeploymentId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId"></a>

```go
FrameworkDeploymentId *string
```

- *Type:* *string

User provided identifier.

It should be unique in scope of a parent.
This is optional and if not provided, a random UUID will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#framework_deployment_id CloudSecurityComplianceFrameworkDeployment#framework_deployment_id}

---

##### `TargetResourceConfig`<sup>Required</sup> <a name="TargetResourceConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig"></a>

```go
TargetResourceConfig CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

target_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#target_resource_config CloudSecurityComplianceFrameworkDeployment#target_resource_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#deletion_policy CloudSecurityComplianceFrameworkDeployment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User provided description of the Framework deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#description CloudSecurityComplianceFrameworkDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#id CloudSecurityComplianceFrameworkDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#location CloudSecurityComplianceFrameworkDeployment#location}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#organization CloudSecurityComplianceFrameworkDeployment#organization}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent resource in which to create the resource. Must be in one of the following formats: * 'projects/{{project}}' * 'organizations/{{organization}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#parent CloudSecurityComplianceFrameworkDeployment#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts"></a>

```go
Timeouts CloudSecurityComplianceFrameworkDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts">CloudSecurityComplianceFrameworkDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#timeouts CloudSecurityComplianceFrameworkDeployment#timeouts}

---

### CloudSecurityComplianceFrameworkDeploymentFramework <a name="CloudSecurityComplianceFrameworkDeploymentFramework" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentFramework {
	Framework: *string,
	MajorRevisionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework.property.framework">Framework</a></code> | <code>*string</code> | In the format: {parent}/locations/{location}/frameworks/{framework}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | Major revision id of the framework. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

In the format: {parent}/locations/{location}/frameworks/{framework}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#framework CloudSecurityComplianceFrameworkDeployment#framework}

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId"></a>

```go
MajorRevisionId *string
```

- *Type:* *string

Major revision id of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#major_revision_id CloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig {
	ExistingTargetResource: *string,
	TargetResourceCreationConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource">ExistingTargetResource</a></code> | <code>*string</code> | CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig">TargetResourceCreationConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | target_resource_creation_config block. |

---

##### `ExistingTargetResource`<sup>Optional</sup> <a name="ExistingTargetResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource"></a>

```go
ExistingTargetResource *string
```

- *Type:* *string

CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#existing_target_resource CloudSecurityComplianceFrameworkDeployment#existing_target_resource}

---

##### `TargetResourceCreationConfig`<sup>Optional</sup> <a name="TargetResourceCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig"></a>

```go
TargetResourceCreationConfig CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

target_resource_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#target_resource_creation_config CloudSecurityComplianceFrameworkDeployment#target_resource_creation_config}

---

### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig {
	FolderCreationConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig,
	ProjectCreationConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig">FolderCreationConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | folder_creation_config block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig">ProjectCreationConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | project_creation_config block. |

---

##### `FolderCreationConfig`<sup>Optional</sup> <a name="FolderCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig"></a>

```go
FolderCreationConfig CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

folder_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#folder_creation_config CloudSecurityComplianceFrameworkDeployment#folder_creation_config}

---

##### `ProjectCreationConfig`<sup>Optional</sup> <a name="ProjectCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig"></a>

```go
ProjectCreationConfig CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

project_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#project_creation_config CloudSecurityComplianceFrameworkDeployment#project_creation_config}

---

### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig {
	FolderDisplayName: *string,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName">FolderDisplayName</a></code> | <code>*string</code> | Display name of the folder to be created. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}. |

---

##### `FolderDisplayName`<sup>Required</sup> <a name="FolderDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName"></a>

```go
FolderDisplayName *string
```

- *Type:* *string

Display name of the folder to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#folder_display_name CloudSecurityComplianceFrameworkDeployment#folder_display_name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#parent CloudSecurityComplianceFrameworkDeployment#parent}

---

### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig {
	BillingAccountId: *string,
	Parent: *string,
	ProjectDisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId">BillingAccountId</a></code> | <code>*string</code> | Billing account id to be used for the project. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent">Parent</a></code> | <code>*string</code> | organizations/{org} or folders/{folder}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName">ProjectDisplayName</a></code> | <code>*string</code> | Display name of the project to be created. |

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId"></a>

```go
BillingAccountId *string
```

- *Type:* *string

Billing account id to be used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#billing_account_id CloudSecurityComplianceFrameworkDeployment#billing_account_id}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#parent CloudSecurityComplianceFrameworkDeployment#parent}

---

##### `ProjectDisplayName`<sup>Required</sup> <a name="ProjectDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName"></a>

```go
ProjectDisplayName *string
```

- *Type:* *string

Display name of the project to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#project_display_name CloudSecurityComplianceFrameworkDeployment#project_display_name}

---

### CloudSecurityComplianceFrameworkDeploymentTimeouts <a name="CloudSecurityComplianceFrameworkDeploymentTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

&cloudsecuritycomplianceframeworkdeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#create CloudSecurityComplianceFrameworkDeployment#create}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#delete CloudSecurityComplianceFrameworkDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#create CloudSecurityComplianceFrameworkDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_security_compliance_framework_deployment#delete CloudSecurityComplianceFrameworkDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get"></a>

```go
func Get(index *f64) CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment">CloudControlDeployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudControlDeployment`<sup>Required</sup> <a name="CloudControlDeployment" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment"></a>

```go
func CloudControlDeployment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">CloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput">MajorRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters"></a>

```go
func Parameters() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a>

---

##### `MajorRevisionIdInput`<sup>Optional</sup> <a name="MajorRevisionIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```go
func MajorRevisionIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```go
func MajorRevisionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get"></a>

```go
func Get(index *f64) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue">PutParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterValue` <a name="PutParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```go
func PutParameterValue(value CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">PutParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterValue` <a name="PutParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```go
func PutParameterValue(value CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```go
func ParameterValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">PutStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStringListValue` <a name="PutStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```go
func PutStringListValue(value CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```go
func ResetNumberValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```go
func NumberValueInput() *f64
```

- *Type:* *f64

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">PutOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">PutStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">ResetOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOneofValue` <a name="PutOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```go
func PutOneofValue(value CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `PutStringListValue` <a name="PutStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```go
func PutStringListValue(value CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```go
func ResetNumberValue()
```

##### `ResetOneofValue` <a name="ResetOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```go
func ResetOneofValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">OneofValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">OneofValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OneofValue`<sup>Required</sup> <a name="OneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```go
func OneofValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```go
func NumberValueInput() *f64
```

- *Type:* *f64

---

##### `OneofValueInput`<sup>Optional</sup> <a name="OneofValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```go
func OneofValueInput() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get"></a>

```go
func Get(index *f64) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails">PutCloudControlDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudControlDetails` <a name="PutCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails"></a>

```go
func PutCloudControlDetails(value CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails">CloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput">CloudControlDetailsInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudControlDetails`<sup>Required</sup> <a name="CloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails"></a>

```go
func CloudControlDetails() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a>

---

##### `CloudControlDetailsInput`<sup>Optional</sup> <a name="CloudControlDetailsInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput"></a>

```go
func CloudControlDetailsInput() CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput">MajorRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `MajorRevisionIdInput`<sup>Optional</sup> <a name="MajorRevisionIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput"></a>

```go
func MajorRevisionIdInput() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId"></a>

```go
func MajorRevisionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentFramework">CloudSecurityComplianceFrameworkDeploymentFramework</a>

---


### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig">PutTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource">ResetExistingTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig">ResetTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetResourceCreationConfig` <a name="PutTargetResourceCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig"></a>

```go
func PutTargetResourceCreationConfig(value CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `ResetExistingTargetResource` <a name="ResetExistingTargetResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource"></a>

```go
func ResetExistingTargetResource()
```

##### `ResetTargetResourceCreationConfig` <a name="ResetTargetResourceCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig"></a>

```go
func ResetTargetResourceCreationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig">TargetResourceCreationConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput">ExistingTargetResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput">TargetResourceCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource">ExistingTargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetResourceCreationConfig`<sup>Required</sup> <a name="TargetResourceCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig"></a>

```go
func TargetResourceCreationConfig() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a>

---

##### `ExistingTargetResourceInput`<sup>Optional</sup> <a name="ExistingTargetResourceInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput"></a>

```go
func ExistingTargetResourceInput() *string
```

- *Type:* *string

---

##### `TargetResourceCreationConfigInput`<sup>Optional</sup> <a name="TargetResourceCreationConfigInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput"></a>

```go
func TargetResourceCreationConfigInput() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `ExistingTargetResource`<sup>Required</sup> <a name="ExistingTargetResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource"></a>

```go
func ExistingTargetResource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---


### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput">FolderDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName">FolderDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FolderDisplayNameInput`<sup>Optional</sup> <a name="FolderDisplayNameInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput"></a>

```go
func FolderDisplayNameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `FolderDisplayName`<sup>Required</sup> <a name="FolderDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName"></a>

```go
func FolderDisplayName() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---


### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig">PutFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig">PutProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig">ResetFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig">ResetProjectCreationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFolderCreationConfig` <a name="PutFolderCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig"></a>

```go
func PutFolderCreationConfig(value CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `PutProjectCreationConfig` <a name="PutProjectCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig"></a>

```go
func PutProjectCreationConfig(value CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `ResetFolderCreationConfig` <a name="ResetFolderCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig"></a>

```go
func ResetFolderCreationConfig()
```

##### `ResetProjectCreationConfig` <a name="ResetProjectCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig"></a>

```go
func ResetProjectCreationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig">FolderCreationConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig">ProjectCreationConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput">FolderCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput">ProjectCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FolderCreationConfig`<sup>Required</sup> <a name="FolderCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig"></a>

```go
func FolderCreationConfig() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a>

---

##### `ProjectCreationConfig`<sup>Required</sup> <a name="ProjectCreationConfig" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig"></a>

```go
func ProjectCreationConfig() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a>

---

##### `FolderCreationConfigInput`<sup>Optional</sup> <a name="FolderCreationConfigInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput"></a>

```go
func FolderCreationConfigInput() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `ProjectCreationConfigInput`<sup>Optional</sup> <a name="ProjectCreationConfigInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput"></a>

```go
func ProjectCreationConfigInput() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---


### CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput">BillingAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput">ProjectDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId">BillingAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName">ProjectDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingAccountIdInput`<sup>Optional</sup> <a name="BillingAccountIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput"></a>

```go
func BillingAccountIdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProjectDisplayNameInput`<sup>Optional</sup> <a name="ProjectDisplayNameInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput"></a>

```go
func ProjectDisplayNameInput() *string
```

- *Type:* *string

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId"></a>

```go
func BillingAccountId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ProjectDisplayName`<sup>Required</sup> <a name="ProjectDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName"></a>

```go
func ProjectDisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">CloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---


### CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference <a name="CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudsecuritycomplianceframeworkdeployment"

cloudsecuritycomplianceframeworkdeployment.NewCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudSecurityComplianceFrameworkDeployment.CloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



