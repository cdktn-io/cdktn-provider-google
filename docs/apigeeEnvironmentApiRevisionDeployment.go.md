# `apigeeEnvironmentApiRevisionDeployment` Submodule <a name="`apigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentApiRevisionDeployment <a name="ApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

apigeeenvironmentapirevisiondeployment.NewApigeeEnvironmentApiRevisionDeployment(scope Construct, id *string, config ApigeeEnvironmentApiRevisionDeploymentConfig) ApigeeEnvironmentApiRevisionDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig">ApigeeEnvironmentApiRevisionDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig">ApigeeEnvironmentApiRevisionDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">ResetSequencedRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeEnvironmentApiRevisionDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```go
func ResetOverride()
```

##### `ResetSequencedRollout` <a name="ResetSequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```go
func ResetSequencedRollout()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

apigeeenvironmentapirevisiondeployment.ApigeeEnvironmentApiRevisionDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

apigeeenvironmentapirevisiondeployment.ApigeeEnvironmentApiRevisionDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

apigeeenvironmentapirevisiondeployment.ApigeeEnvironmentApiRevisionDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

apigeeenvironmentapirevisiondeployment.ApigeeEnvironmentApiRevisionDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeEnvironmentApiRevisionDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths">Basepaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">DeployStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput">RevisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">SequencedRolloutInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">SequencedRollout</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Basepaths`<sup>Required</sup> <a name="Basepaths" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```go
func Basepaths() *[]*string
```

- *Type:* *[]*string

---

##### `DeployStartTime`<sup>Required</sup> <a name="DeployStartTime" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```go
func DeployStartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```go
func Timeouts() ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```go
func RevisionInput() *f64
```

- *Type:* *f64

---

##### `SequencedRolloutInput`<sup>Optional</sup> <a name="SequencedRolloutInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```go
func SequencedRolloutInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `SequencedRollout`<sup>Required</sup> <a name="SequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```go
func SequencedRollout() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentApiRevisionDeploymentConfig <a name="ApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

&apigeeenvironmentapirevisiondeployment.ApigeeEnvironmentApiRevisionDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Api: *string,
	Environment: *string,
	OrgId: *string,
	Revision: *f64,
	DeletionPolicy: *string,
	Id: *string,
	Override: interface{},
	SequencedRollout: interface{},
	ServiceAccount: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api">Api</a></code> | <code>*string</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">Environment</a></code> | <code>*string</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">Revision</a></code> | <code>*f64</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override">Override</a></code> | <code>interface{}</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">SequencedRollout</a></code> | <code>interface{}</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```go
Revision *f64
```

- *Type:* *f64

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `SequencedRollout`<sup>Optional</sup> <a name="SequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```go
SequencedRollout interface{}
```

- *Type:* interface{}

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```go
Timeouts ApigeeEnvironmentApiRevisionDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### ApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="ApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

&apigeeenvironmentapirevisiondeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apigeeenvironmentapirevisiondeployment"

apigeeenvironmentapirevisiondeployment.NewApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



