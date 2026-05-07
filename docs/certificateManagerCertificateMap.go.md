# `certificateManagerCertificateMap` Submodule <a name="`certificateManagerCertificateMap` Submodule" id="@cdktn/provider-google.certificateManagerCertificateMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateMap <a name="CertificateManagerCertificateMap" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map google_certificate_manager_certificate_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.NewCertificateManagerCertificateMap(scope Construct, id *string, config CertificateManagerCertificateMapConfig) CertificateManagerCertificateMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig">CertificateManagerCertificateMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig">CertificateManagerCertificateMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.putTimeouts"></a>

```go
func PutTimeouts(value CertificateManagerCertificateMapTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificateManagerCertificateMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.CertificateManagerCertificateMap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.CertificateManagerCertificateMap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.CertificateManagerCertificateMap_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.CertificateManagerCertificateMap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CertificateManagerCertificateMap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CertificateManagerCertificateMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CertificateManagerCertificateMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificateMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.gclbTargets">GclbTargets</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList">CertificateManagerCertificateMapGclbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference">CertificateManagerCertificateMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `GclbTargets`<sup>Required</sup> <a name="GclbTargets" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.gclbTargets"></a>

```go
func GclbTargets() CertificateManagerCertificateMapGclbTargetsList
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList">CertificateManagerCertificateMapGclbTargetsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeouts"></a>

```go
func Timeouts() CertificateManagerCertificateMapTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference">CertificateManagerCertificateMapTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateMapConfig <a name="CertificateManagerCertificateMapConfig" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

&certificatemanagercertificatemap.CertificateManagerCertificateMapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v18.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the Certificate Map. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#id CertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with a Certificate Map resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#project CertificateManagerCertificateMap#project}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the Certificate Map.

Certificate Map names must be unique
globally and match the pattern 'projects/* /locations/* /certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#name CertificateManagerCertificateMap#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#description CertificateManagerCertificateMap#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#id CertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with a Certificate Map resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#labels CertificateManagerCertificateMap#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#project CertificateManagerCertificateMap#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.timeouts"></a>

```go
Timeouts CertificateManagerCertificateMapTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#timeouts CertificateManagerCertificateMap#timeouts}

---

### CertificateManagerCertificateMapGclbTargets <a name="CertificateManagerCertificateMapGclbTargets" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

&certificatemanagercertificatemap.CertificateManagerCertificateMapGclbTargets {

}
```


### CertificateManagerCertificateMapGclbTargetsIpConfigs <a name="CertificateManagerCertificateMapGclbTargetsIpConfigs" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

&certificatemanagercertificatemap.CertificateManagerCertificateMapGclbTargetsIpConfigs {

}
```


### CertificateManagerCertificateMapTimeouts <a name="CertificateManagerCertificateMapTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

&certificatemanagercertificatemap.CertificateManagerCertificateMapTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#create CertificateManagerCertificateMap#create}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#delete CertificateManagerCertificateMap#delete}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#update CertificateManagerCertificateMap#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#create CertificateManagerCertificateMap#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#delete CertificateManagerCertificateMap#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/certificate_manager_certificate_map#update CertificateManagerCertificateMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateMapGclbTargetsIpConfigsList <a name="CertificateManagerCertificateMapGclbTargetsIpConfigsList" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.NewCertificateManagerCertificateMapGclbTargetsIpConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificateManagerCertificateMapGclbTargetsIpConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.get"></a>

```go
func Get(index *f64) CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference <a name="CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.NewCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs">CertificateManagerCertificateMapGclbTargetsIpConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateManagerCertificateMapGclbTargetsIpConfigs
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs">CertificateManagerCertificateMapGclbTargetsIpConfigs</a>

---


### CertificateManagerCertificateMapGclbTargetsList <a name="CertificateManagerCertificateMapGclbTargetsList" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.NewCertificateManagerCertificateMapGclbTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificateManagerCertificateMapGclbTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.get"></a>

```go
func Get(index *f64) CertificateManagerCertificateMapGclbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificateManagerCertificateMapGclbTargetsOutputReference <a name="CertificateManagerCertificateMapGclbTargetsOutputReference" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.NewCertificateManagerCertificateMapGclbTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificateManagerCertificateMapGclbTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs">IpConfigs</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList">CertificateManagerCertificateMapGclbTargetsIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy">TargetHttpsProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy">TargetSslProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets">CertificateManagerCertificateMapGclbTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpConfigs`<sup>Required</sup> <a name="IpConfigs" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs"></a>

```go
func IpConfigs() CertificateManagerCertificateMapGclbTargetsIpConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList">CertificateManagerCertificateMapGclbTargetsIpConfigsList</a>

---

##### `TargetHttpsProxy`<sup>Required</sup> <a name="TargetHttpsProxy" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy"></a>

```go
func TargetHttpsProxy() *string
```

- *Type:* *string

---

##### `TargetSslProxy`<sup>Required</sup> <a name="TargetSslProxy" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy"></a>

```go
func TargetSslProxy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateManagerCertificateMapGclbTargets
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets">CertificateManagerCertificateMapGclbTargets</a>

---


### CertificateManagerCertificateMapTimeoutsOutputReference <a name="CertificateManagerCertificateMapTimeoutsOutputReference" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v18/certificatemanagercertificatemap"

certificatemanagercertificatemap.NewCertificateManagerCertificateMapTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateManagerCertificateMapTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



