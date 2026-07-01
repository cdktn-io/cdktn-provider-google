# `computeOrganizationSecurityPolicyAssociation` Submodule <a name="`computeOrganizationSecurityPolicyAssociation` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicyAssociation <a name="ComputeOrganizationSecurityPolicyAssociation" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association google_compute_organization_security_policy_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

computeorganizationsecuritypolicyassociation.NewComputeOrganizationSecurityPolicyAssociation(scope Construct, id *string, config ComputeOrganizationSecurityPolicyAssociationConfig) ComputeOrganizationSecurityPolicyAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig">ComputeOrganizationSecurityPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig">ComputeOrganizationSecurityPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedFolders">ResetExcludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedProjects">ResetExcludedProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ComputeOrganizationSecurityPolicyAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetExcludedFolders` <a name="ResetExcludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedFolders"></a>

```go
func ResetExcludedFolders()
```

##### `ResetExcludedProjects` <a name="ResetExcludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetExcludedProjects"></a>

```go
func ResetExcludedProjects()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

computeorganizationsecuritypolicyassociation.ComputeOrganizationSecurityPolicyAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

computeorganizationsecuritypolicyassociation.ComputeOrganizationSecurityPolicyAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

computeorganizationsecuritypolicyassociation.ComputeOrganizationSecurityPolicyAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

computeorganizationsecuritypolicyassociation.ComputeOrganizationSecurityPolicyAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeOrganizationSecurityPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeOrganizationSecurityPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFoldersInput">ExcludedFoldersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjectsInput">ExcludedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFolders">ExcludedFolders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjects">ExcludedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeouts"></a>

```go
func Timeouts() ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference">ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference</a>

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentIdInput"></a>

```go
func AttachmentIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `ExcludedFoldersInput`<sup>Optional</sup> <a name="ExcludedFoldersInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFoldersInput"></a>

```go
func ExcludedFoldersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedProjectsInput`<sup>Optional</sup> <a name="ExcludedProjectsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjectsInput"></a>

```go
func ExcludedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `ExcludedFolders`<sup>Required</sup> <a name="ExcludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedFolders"></a>

```go
func ExcludedFolders() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedProjects`<sup>Required</sup> <a name="ExcludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.excludedProjects"></a>

```go
func ExcludedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyAssociationConfig <a name="ComputeOrganizationSecurityPolicyAssociationConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

&computeorganizationsecuritypolicyassociation.ComputeOrganizationSecurityPolicyAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentId: *string,
	Name: *string,
	PolicyId: *string,
	DeletionPolicy: *string,
	ExcludedFolders: *[]*string,
	ExcludedProjects: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | The resource that the security policy is attached to. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.name">Name</a></code> | <code>*string</code> | The name for an association. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The security policy ID of the association. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedFolders">ExcludedFolders</a></code> | <code>*[]*string</code> | A list of folders to exclude from the security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedProjects">ExcludedProjects</a></code> | <code>*[]*string</code> | A list of projects to exclude from the security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.attachmentId"></a>

```go
AttachmentId *string
```

- *Type:* *string

The resource that the security policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#attachment_id ComputeOrganizationSecurityPolicyAssociation#attachment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#name ComputeOrganizationSecurityPolicyAssociation#name}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The security policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#policy_id ComputeOrganizationSecurityPolicyAssociation#policy_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#deletion_policy ComputeOrganizationSecurityPolicyAssociation#deletion_policy}

---

##### `ExcludedFolders`<sup>Optional</sup> <a name="ExcludedFolders" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedFolders"></a>

```go
ExcludedFolders *[]*string
```

- *Type:* *[]*string

A list of folders to exclude from the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#excluded_folders ComputeOrganizationSecurityPolicyAssociation#excluded_folders}

---

##### `ExcludedProjects`<sup>Optional</sup> <a name="ExcludedProjects" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.excludedProjects"></a>

```go
ExcludedProjects *[]*string
```

- *Type:* *[]*string

A list of projects to exclude from the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#excluded_projects ComputeOrganizationSecurityPolicyAssociation#excluded_projects}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#id ComputeOrganizationSecurityPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationConfig.property.timeouts"></a>

```go
Timeouts ComputeOrganizationSecurityPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts">ComputeOrganizationSecurityPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#timeouts ComputeOrganizationSecurityPolicyAssociation#timeouts}

---

### ComputeOrganizationSecurityPolicyAssociationTimeouts <a name="ComputeOrganizationSecurityPolicyAssociationTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

&computeorganizationsecuritypolicyassociation.ComputeOrganizationSecurityPolicyAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#create ComputeOrganizationSecurityPolicyAssociation#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#delete ComputeOrganizationSecurityPolicyAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#create ComputeOrganizationSecurityPolicyAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_organization_security_policy_association#delete ComputeOrganizationSecurityPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computeorganizationsecuritypolicyassociation"

computeorganizationsecuritypolicyassociation.NewComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicyAssociation.ComputeOrganizationSecurityPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



