# `designCenterApplication` Submodule <a name="`designCenterApplication` Submodule" id="@cdktn/provider-google.designCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesignCenterApplication <a name="DesignCenterApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplication(scope Construct, id *string, config DesignCenterApplicationConfig) DesignCenterApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig">DesignCenterApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig">DesignCenterApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters">PutAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters">PutComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters">PutCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs">PutConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget">PutDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig">PutRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters">ResetAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters">ResetComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters">ResetCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs">ResetConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject">ResetDeploymentProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion">ResetDeploymentRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget">ResetDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig">ResetRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppParameters` <a name="PutAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters"></a>

```go
func PutAppParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes"></a>

```go
func PutAttributes(value DesignCenterApplicationAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `PutComponentParameters` <a name="PutComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters"></a>

```go
func PutComponentParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCompositeApplicationParameters` <a name="PutCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters"></a>

```go
func PutCompositeApplicationParameters(value DesignCenterApplicationCompositeApplicationParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `PutConnectionConfigs` <a name="PutConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs"></a>

```go
func PutConnectionConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeploymentTarget` <a name="PutDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget"></a>

```go
func PutDeploymentTarget(value DesignCenterApplicationDeploymentTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `PutRolesApisConfig` <a name="PutRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig"></a>

```go
func PutRolesApisConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope"></a>

```go
func PutScope(value DesignCenterApplicationScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource"></a>

```go
func PutSource(value DesignCenterApplicationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts"></a>

```go
func PutTimeouts(value DesignCenterApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---

##### `ResetAppParameters` <a name="ResetAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters"></a>

```go
func ResetAppParameters()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetComponentParameters` <a name="ResetComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters"></a>

```go
func ResetComponentParameters()
```

##### `ResetCompositeApplicationParameters` <a name="ResetCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters"></a>

```go
func ResetCompositeApplicationParameters()
```

##### `ResetConnectionConfigs` <a name="ResetConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs"></a>

```go
func ResetConnectionConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeploymentProject` <a name="ResetDeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject"></a>

```go
func ResetDeploymentProject()
```

##### `ResetDeploymentRegion` <a name="ResetDeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion"></a>

```go
func ResetDeploymentRegion()
```

##### `ResetDeploymentTarget` <a name="ResetDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget"></a>

```go
func ResetDeploymentTarget()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRolesApisConfig` <a name="ResetRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig"></a>

```go
func ResetRolesApisConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.DesignCenterApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.DesignCenterApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.DesignCenterApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.DesignCenterApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DesignCenterApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication">ApphubApplication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters">AppParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters">ComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters">CompositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs">ConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata">DeploymentMetadata</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget">DeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig">RolesApisConfig</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput">AppParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput">ComponentParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput">CompositeApplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput">ConnectionConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput">DeploymentProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput">DeploymentRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput">DeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput">RolesApisConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput">SpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject">DeploymentProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion">DeploymentRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space">Space</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApphubApplication`<sup>Required</sup> <a name="ApphubApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication"></a>

```go
func ApphubApplication() *string
```

- *Type:* *string

---

##### `AppParameters`<sup>Required</sup> <a name="AppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters"></a>

```go
func AppParameters() DesignCenterApplicationAppParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes"></a>

```go
func Attributes() DesignCenterApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a>

---

##### `ComponentParameters`<sup>Required</sup> <a name="ComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters"></a>

```go
func ComponentParameters() DesignCenterApplicationComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a>

---

##### `CompositeApplicationParameters`<sup>Required</sup> <a name="CompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters"></a>

```go
func CompositeApplicationParameters() DesignCenterApplicationCompositeApplicationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `ConnectionConfigs`<sup>Required</sup> <a name="ConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs"></a>

```go
func ConnectionConfigs() DesignCenterApplicationConnectionConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeploymentMetadata`<sup>Required</sup> <a name="DeploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata"></a>

```go
func DeploymentMetadata() DesignCenterApplicationDeploymentMetadataList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a>

---

##### `DeploymentTarget`<sup>Required</sup> <a name="DeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget"></a>

```go
func DeploymentTarget() DesignCenterApplicationDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RolesApisConfig`<sup>Required</sup> <a name="RolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig"></a>

```go
func RolesApisConfig() DesignCenterApplicationRolesApisConfigList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope"></a>

```go
func Scope() DesignCenterApplicationScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source"></a>

```go
func Source() DesignCenterApplicationSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts"></a>

```go
func Timeouts() DesignCenterApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `AppParametersInput`<sup>Optional</sup> <a name="AppParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput"></a>

```go
func AppParametersInput() interface{}
```

- *Type:* interface{}

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput"></a>

```go
func AttributesInput() DesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `ComponentParametersInput`<sup>Optional</sup> <a name="ComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput"></a>

```go
func ComponentParametersInput() interface{}
```

- *Type:* interface{}

---

##### `CompositeApplicationParametersInput`<sup>Optional</sup> <a name="CompositeApplicationParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput"></a>

```go
func CompositeApplicationParametersInput() DesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `ConnectionConfigsInput`<sup>Optional</sup> <a name="ConnectionConfigsInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput"></a>

```go
func ConnectionConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeploymentProjectInput`<sup>Optional</sup> <a name="DeploymentProjectInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput"></a>

```go
func DeploymentProjectInput() *string
```

- *Type:* *string

---

##### `DeploymentRegionInput`<sup>Optional</sup> <a name="DeploymentRegionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput"></a>

```go
func DeploymentRegionInput() *string
```

- *Type:* *string

---

##### `DeploymentTargetInput`<sup>Optional</sup> <a name="DeploymentTargetInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput"></a>

```go
func DeploymentTargetInput() DesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolesApisConfigInput`<sup>Optional</sup> <a name="RolesApisConfigInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput"></a>

```go
func RolesApisConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput"></a>

```go
func ScopeInput() DesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput"></a>

```go
func SourceInput() DesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput"></a>

```go
func SpaceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeploymentProject`<sup>Required</sup> <a name="DeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject"></a>

```go
func DeploymentProject() *string
```

- *Type:* *string

---

##### `DeploymentRegion`<sup>Required</sup> <a name="DeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion"></a>

```go
func DeploymentRegion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space"></a>

```go
func Space() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DesignCenterApplicationAppParameters <a name="DesignCenterApplicationAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAppParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key">Key</a></code> | <code>*string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value">Value</a></code> | <code>*string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationAttributes <a name="DesignCenterApplicationAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAttributes {
	BusinessOwners: interface{},
	Criticality: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationAttributesCriticality,
	DeveloperOwners: interface{},
	Environment: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationAttributesEnvironment,
	OperatorOwners: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners">BusinessOwners</a></code> | <code>interface{}</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners">DeveloperOwners</a></code> | <code>interface{}</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners">OperatorOwners</a></code> | <code>interface{}</code> | operator_owners block. |

---

##### `BusinessOwners`<sup>Optional</sup> <a name="BusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners"></a>

```go
BusinessOwners interface{}
```

- *Type:* interface{}

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#business_owners DesignCenterApplication#business_owners}

---

##### `Criticality`<sup>Optional</sup> <a name="Criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality"></a>

```go
Criticality DesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#criticality DesignCenterApplication#criticality}

---

##### `DeveloperOwners`<sup>Optional</sup> <a name="DeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners"></a>

```go
DeveloperOwners interface{}
```

- *Type:* interface{}

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#developer_owners DesignCenterApplication#developer_owners}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment"></a>

```go
Environment DesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#environment DesignCenterApplication#environment}

---

##### `OperatorOwners`<sup>Optional</sup> <a name="OperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners"></a>

```go
OperatorOwners interface{}
```

- *Type:* interface{}

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#operator_owners DesignCenterApplication#operator_owners}

---

### DesignCenterApplicationAttributesBusinessOwners <a name="DesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAttributesBusinessOwners {
	Email: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email">Email</a></code> | <code>*string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName">DisplayName</a></code> | <code>*string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesCriticality <a name="DesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAttributesCriticality {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type">Type</a></code> | <code>*string</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type"></a>

```go
Type *string
```

- *Type:* *string

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesDeveloperOwners <a name="DesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAttributesDeveloperOwners {
	Email: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email">Email</a></code> | <code>*string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName">DisplayName</a></code> | <code>*string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesEnvironment <a name="DesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAttributesEnvironment {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type">Type</a></code> | <code>*string</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type"></a>

```go
Type *string
```

- *Type:* *string

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesOperatorOwners <a name="DesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationAttributesOperatorOwners {
	Email: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email">Email</a></code> | <code>*string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName">DisplayName</a></code> | <code>*string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationComponentParameters <a name="DesignCenterApplicationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationComponentParameters {
	Component: *string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component">Component</a></code> | <code>*string</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component"></a>

```go
Component *string
```

- *Type:* *string

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component DesignCenterApplication#component}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#parameters DesignCenterApplication#parameters}

---

### DesignCenterApplicationComponentParametersParameters <a name="DesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationComponentParametersParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key">Key</a></code> | <code>*string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value">Value</a></code> | <code>*string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationCompositeApplicationParameters <a name="DesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationCompositeApplicationParameters {
	ServiceAccountMap: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">ServiceAccountMap</a></code> | <code>*map[string]*string</code> | A map from a component URI to the service account that deploys the component. |

---

##### `ServiceAccountMap`<sup>Optional</sup> <a name="ServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```go
ServiceAccountMap *map[string]*string
```

- *Type:* *map[string]*string

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account_map DesignCenterApplication#service_account_map}

---

### DesignCenterApplicationConfig <a name="DesignCenterApplicationConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Location: *string,
	Scope: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationScope,
	Source: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationSource,
	Space: *string,
	AppParameters: interface{},
	Attributes: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationAttributes,
	ComponentParameters: interface{},
	CompositeApplicationParameters: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters,
	ConnectionConfigs: interface{},
	DeletionPolicy: *string,
	DeploymentProject: *string,
	DeploymentRegion: *string,
	DeploymentTarget: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationDeploymentTarget,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	RolesApisConfig: interface{},
	ServiceAccount: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location">Location</a></code> | <code>*string</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space">Space</a></code> | <code>*string</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters">AppParameters</a></code> | <code>interface{}</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters">ComponentParameters</a></code> | <code>interface{}</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters">CompositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs">ConnectionConfigs</a></code> | <code>interface{}</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject">DeploymentProject</a></code> | <code>*string</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion">DeploymentRegion</a></code> | <code>*string</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget">DeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description">Description</a></code> | <code>*string</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig">RolesApisConfig</a></code> | <code>interface{}</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_id DesignCenterApplication#application_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#location DesignCenterApplication#location}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope"></a>

```go
Scope DesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#scope DesignCenterApplication#scope}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source"></a>

```go
Source DesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source DesignCenterApplication#source}

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space"></a>

```go
Space *string
```

- *Type:* *string

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#space DesignCenterApplication#space}

---

##### `AppParameters`<sup>Optional</sup> <a name="AppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters"></a>

```go
AppParameters interface{}
```

- *Type:* interface{}

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#app_parameters DesignCenterApplication#app_parameters}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes"></a>

```go
Attributes DesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#attributes DesignCenterApplication#attributes}

---

##### `ComponentParameters`<sup>Optional</sup> <a name="ComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters"></a>

```go
ComponentParameters interface{}
```

- *Type:* interface{}

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component_parameters DesignCenterApplication#component_parameters}

---

##### `CompositeApplicationParameters`<sup>Optional</sup> <a name="CompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```go
CompositeApplicationParameters DesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#composite_application_parameters DesignCenterApplication#composite_application_parameters}

---

##### `ConnectionConfigs`<sup>Optional</sup> <a name="ConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs"></a>

```go
ConnectionConfigs interface{}
```

- *Type:* interface{}

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_configs DesignCenterApplication#connection_configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deletion_policy DesignCenterApplication#deletion_policy}

---

##### `DeploymentProject`<sup>Optional</sup> <a name="DeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject"></a>

```go
DeploymentProject *string
```

- *Type:* *string

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_project DesignCenterApplication#deployment_project}

---

##### `DeploymentRegion`<sup>Optional</sup> <a name="DeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion"></a>

```go
DeploymentRegion *string
```

- *Type:* *string

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_region DesignCenterApplication#deployment_region}

---

##### `DeploymentTarget`<sup>Optional</sup> <a name="DeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget"></a>

```go
DeploymentTarget DesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_target DesignCenterApplication#deployment_target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#description DesignCenterApplication#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}.

---

##### `RolesApisConfig`<sup>Optional</sup> <a name="RolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig"></a>

```go
RolesApisConfig interface{}
```

- *Type:* interface{}

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles_apis_config DesignCenterApplication#roles_apis_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account DesignCenterApplication#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts"></a>

```go
Timeouts DesignCenterApplicationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#timeouts DesignCenterApplication#timeouts}

---

### DesignCenterApplicationConnectionConfigs <a name="DesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationConnectionConfigs {
	ConnectionUri: *string,
	DestinationComponentParameters: interface{},
	SourceComponentParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri">ConnectionUri</a></code> | <code>*string</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">DestinationComponentParameters</a></code> | <code>interface{}</code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">SourceComponentParameters</a></code> | <code>interface{}</code> | source_component_parameters block. |

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```go
ConnectionUri *string
```

- *Type:* *string

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_uri DesignCenterApplication#connection_uri}

---

##### `DestinationComponentParameters`<sup>Optional</sup> <a name="DestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```go
DestinationComponentParameters interface{}
```

- *Type:* interface{}

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#destination_component_parameters DesignCenterApplication#destination_component_parameters}

---

##### `SourceComponentParameters`<sup>Optional</sup> <a name="SourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```go
SourceComponentParameters interface{}
```

- *Type:* interface{}

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source_component_parameters DesignCenterApplication#source_component_parameters}

---

### DesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">Key</a></code> | <code>*string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">Value</a></code> | <code>*string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="DesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">Key</a></code> | <code>*string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">Value</a></code> | <code>*string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationDeploymentMetadata <a name="DesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationDeploymentMetadata {

}
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters {

}
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters {

}
```


### DesignCenterApplicationDeploymentMetadataError <a name="DesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationDeploymentMetadataError {

}
```


### DesignCenterApplicationDeploymentTarget <a name="DesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationDeploymentTarget {
	GkeDeploymentTarget: github.com/cdktn-io/cdktn-provider-google-go/google/v22.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">GkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `GkeDeploymentTarget`<sup>Optional</sup> <a name="GkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```go
GkeDeploymentTarget DesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#gke_deployment_target DesignCenterApplication#gke_deployment_target}

---

### DesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget {
	ClusterSelfLink: *string,
	KubernetesServiceAccount: *string,
	Namespace: *string,
	KubernetesServiceAccountCreation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">ClusterSelfLink</a></code> | <code>*string</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">KubernetesServiceAccount</a></code> | <code>*string</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">KubernetesServiceAccountCreation</a></code> | <code>interface{}</code> | Whether to create the Kubernetes service account. |

---

##### `ClusterSelfLink`<sup>Required</sup> <a name="ClusterSelfLink" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```go
ClusterSelfLink *string
```

- *Type:* *string

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#cluster_self_link DesignCenterApplication#cluster_self_link}

---

##### `KubernetesServiceAccount`<sup>Required</sup> <a name="KubernetesServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```go
KubernetesServiceAccount *string
```

- *Type:* *string

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account DesignCenterApplication#kubernetes_service_account}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#namespace DesignCenterApplication#namespace}

---

##### `KubernetesServiceAccountCreation`<sup>Optional</sup> <a name="KubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```go
KubernetesServiceAccountCreation interface{}
```

- *Type:* interface{}

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account_creation DesignCenterApplication#kubernetes_service_account_creation}

---

### DesignCenterApplicationRolesApisConfig <a name="DesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationRolesApisConfig {
	ProjectId: *string,
	Apis: interface{},
	Roles: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis">Apis</a></code> | <code>interface{}</code> | apis block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles">Roles</a></code> | <code>interface{}</code> | roles block. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project_id DesignCenterApplication#project_id}

---

##### `Apis`<sup>Optional</sup> <a name="Apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis"></a>

```go
Apis interface{}
```

- *Type:* interface{}

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#apis DesignCenterApplication#apis}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles"></a>

```go
Roles interface{}
```

- *Type:* interface{}

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles DesignCenterApplication#roles}

---

### DesignCenterApplicationRolesApisConfigApis <a name="DesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationRolesApisConfigApis {
	Api: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api">Api</a></code> | <code>*string</code> | API name, such as 'compute.googleapis.com'. |

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api"></a>

```go
Api *string
```

- *Type:* *string

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#api DesignCenterApplication#api}

---

### DesignCenterApplicationRolesApisConfigRoles <a name="DesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationRolesApisConfigRoles {
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role">Role</a></code> | <code>*string</code> | IAM role name, such as 'roles/editor'. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```go
Role *string
```

- *Type:* *string

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#role DesignCenterApplication#role}

---

### DesignCenterApplicationScope <a name="DesignCenterApplicationScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationScope {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type">Type</a></code> | <code>*string</code> | Scope type. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type"></a>

```go
Type *string
```

- *Type:* *string

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationSource <a name="DesignCenterApplicationSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationSource {
	ApplicationTemplateRevision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision">ApplicationTemplateRevision</a></code> | <code>*string</code> | Application template revision URI. |

---

##### `ApplicationTemplateRevision`<sup>Optional</sup> <a name="ApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```go
ApplicationTemplateRevision *string
```

- *Type:* *string

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_template_revision DesignCenterApplication#application_template_revision}

---

### DesignCenterApplicationTimeouts <a name="DesignCenterApplicationTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

&designcenterapplication.DesignCenterApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesignCenterApplicationAppParametersList <a name="DesignCenterApplicationAppParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAppParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationAppParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationAppParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAppParametersOutputReference <a name="DesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAppParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationAppParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesBusinessOwnersList <a name="DesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesBusinessOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationAttributesBusinessOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="DesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesBusinessOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationAttributesBusinessOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesCriticalityOutputReference <a name="DesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesCriticalityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationAttributesCriticalityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---


### DesignCenterApplicationAttributesDeveloperOwnersList <a name="DesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesDeveloperOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationAttributesDeveloperOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="DesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesDeveloperOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationAttributesDeveloperOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesEnvironmentOutputReference <a name="DesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationAttributesEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---


### DesignCenterApplicationAttributesOperatorOwnersList <a name="DesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesOperatorOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationAttributesOperatorOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="DesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesOperatorOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationAttributesOperatorOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationAttributesOutputReference <a name="DesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners">PutBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality">PutCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners">PutDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners">PutOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners">ResetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality">ResetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">ResetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners">ResetOperatorOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBusinessOwners` <a name="PutBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```go
func PutBusinessOwners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCriticality` <a name="PutCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```go
func PutCriticality(value DesignCenterApplicationAttributesCriticality)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `PutDeveloperOwners` <a name="PutDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```go
func PutDeveloperOwners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value DesignCenterApplicationAttributesEnvironment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `PutOperatorOwners` <a name="PutOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```go
func PutOperatorOwners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBusinessOwners` <a name="ResetBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```go
func ResetBusinessOwners()
```

##### `ResetCriticality` <a name="ResetCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```go
func ResetCriticality()
```

##### `ResetDeveloperOwners` <a name="ResetDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```go
func ResetDeveloperOwners()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetOperatorOwners` <a name="ResetOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```go
func ResetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners">BusinessOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners">DeveloperOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners">OperatorOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">BusinessOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput">CriticalityInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">DeveloperOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">OperatorOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BusinessOwners`<sup>Required</sup> <a name="BusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```go
func BusinessOwners() DesignCenterApplicationAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```go
func Criticality() DesignCenterApplicationAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `DeveloperOwners`<sup>Required</sup> <a name="DeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```go
func DeveloperOwners() DesignCenterApplicationAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment"></a>

```go
func Environment() DesignCenterApplicationAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `OperatorOwners`<sup>Required</sup> <a name="OperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```go
func OperatorOwners() DesignCenterApplicationAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `BusinessOwnersInput`<sup>Optional</sup> <a name="BusinessOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```go
func BusinessOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `CriticalityInput`<sup>Optional</sup> <a name="CriticalityInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```go
func CriticalityInput() DesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `DeveloperOwnersInput`<sup>Optional</sup> <a name="DeveloperOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```go
func DeveloperOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() DesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `OperatorOwnersInput`<sup>Optional</sup> <a name="OperatorOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```go
func OperatorOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---


### DesignCenterApplicationComponentParametersList <a name="DesignCenterApplicationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationComponentParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationComponentParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationComponentParametersOutputReference <a name="DesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationComponentParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationComponentParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput">ComponentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```go
func Parameters() DesignCenterApplicationComponentParametersParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```go
func ComponentInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationComponentParametersParametersList <a name="DesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationComponentParametersParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationComponentParametersParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationComponentParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationComponentParametersParametersOutputReference <a name="DesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationComponentParametersParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationComponentParametersParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationCompositeApplicationParametersOutputReference <a name="DesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationCompositeApplicationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationCompositeApplicationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">ResetServiceAccountMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountMap` <a name="ResetServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```go
func ResetServiceAccountMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">ServiceAccountMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">ServiceAccountMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountMapInput`<sup>Optional</sup> <a name="ServiceAccountMapInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```go
func ServiceAccountMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceAccountMap`<sup>Required</sup> <a name="ServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```go
func ServiceAccountMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationConnectionConfigsDestinationComponentParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationConnectionConfigsDestinationComponentParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationConnectionConfigsList <a name="DesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationConnectionConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationConnectionConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationConnectionConfigsOutputReference <a name="DesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationConnectionConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationConnectionConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">PutDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">PutSourceComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">ResetDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">ResetSourceComponentParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationComponentParameters` <a name="PutDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```go
func PutDestinationComponentParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceComponentParameters` <a name="PutSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```go
func PutSourceComponentParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationComponentParameters` <a name="ResetDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```go
func ResetDestinationComponentParameters()
```

##### `ResetSourceComponentParameters` <a name="ResetSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```go
func ResetSourceComponentParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">DestinationComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">SourceComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">ConnectionUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">DestinationComponentParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">SourceComponentParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">ConnectionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationComponentParameters`<sup>Required</sup> <a name="DestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```go
func DestinationComponentParameters() DesignCenterApplicationConnectionConfigsDestinationComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `SourceComponentParameters`<sup>Required</sup> <a name="SourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```go
func SourceComponentParameters() DesignCenterApplicationConnectionConfigsSourceComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `ConnectionUriInput`<sup>Optional</sup> <a name="ConnectionUriInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```go
func ConnectionUriInput() *string
```

- *Type:* *string

---

##### `DestinationComponentParametersInput`<sup>Optional</sup> <a name="DestinationComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```go
func DestinationComponentParametersInput() interface{}
```

- *Type:* interface{}

---

##### `SourceComponentParametersInput`<sup>Optional</sup> <a name="SourceComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```go
func SourceComponentParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```go
func ConnectionUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationConnectionConfigsSourceComponentParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationConnectionConfigsSourceComponentParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataComponentOutputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationDeploymentMetadataComponentOutputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```go
func Parameters() DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationDeploymentMetadataComponentOutputParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### DesignCenterApplicationDeploymentMetadataErrorList <a name="DesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationDeploymentMetadataErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationDeploymentMetadataErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="DesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationDeploymentMetadataErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">Detail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```go
func Detail() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationDeploymentMetadataError
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a>

---


### DesignCenterApplicationDeploymentMetadataList <a name="DesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationDeploymentMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationDeploymentMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DesignCenterApplicationDeploymentMetadataOutputReference <a name="DesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationDeploymentMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">ComponentOutputParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `ComponentOutputParameters`<sup>Required</sup> <a name="ComponentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```go
func ComponentOutputParameters() DesignCenterApplicationDeploymentMetadataComponentOutputParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```go
func Error() DesignCenterApplicationDeploymentMetadataErrorList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```go
func RetryAttempts() *f64
```

- *Type:* *f64

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationDeploymentMetadata
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a>

---


### DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">ResetKubernetesServiceAccountCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKubernetesServiceAccountCreation` <a name="ResetKubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```go
func ResetKubernetesServiceAccountCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">ClusterSelfLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">KubernetesServiceAccountCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">KubernetesServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">ClusterSelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">KubernetesServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">KubernetesServiceAccountCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterSelfLinkInput`<sup>Optional</sup> <a name="ClusterSelfLinkInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```go
func ClusterSelfLinkInput() *string
```

- *Type:* *string

---

##### `KubernetesServiceAccountCreationInput`<sup>Optional</sup> <a name="KubernetesServiceAccountCreationInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```go
func KubernetesServiceAccountCreationInput() interface{}
```

- *Type:* interface{}

---

##### `KubernetesServiceAccountInput`<sup>Optional</sup> <a name="KubernetesServiceAccountInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```go
func KubernetesServiceAccountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ClusterSelfLink`<sup>Required</sup> <a name="ClusterSelfLink" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```go
func ClusterSelfLink() *string
```

- *Type:* *string

---

##### `KubernetesServiceAccount`<sup>Required</sup> <a name="KubernetesServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```go
func KubernetesServiceAccount() *string
```

- *Type:* *string

---

##### `KubernetesServiceAccountCreation`<sup>Required</sup> <a name="KubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```go
func KubernetesServiceAccountCreation() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### DesignCenterApplicationDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationDeploymentTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationDeploymentTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">PutGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">ResetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeDeploymentTarget` <a name="PutGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```go
func PutGkeDeploymentTarget(value DesignCenterApplicationDeploymentTargetGkeDeploymentTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `ResetGkeDeploymentTarget` <a name="ResetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```go
func ResetGkeDeploymentTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">GkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">GkeDeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GkeDeploymentTarget`<sup>Required</sup> <a name="GkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```go
func GkeDeploymentTarget() DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `GkeDeploymentTargetInput`<sup>Optional</sup> <a name="GkeDeploymentTargetInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```go
func GkeDeploymentTargetInput() DesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---


### DesignCenterApplicationRolesApisConfigApisList <a name="DesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationRolesApisConfigApisList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationRolesApisConfigApisList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationRolesApisConfigApisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationRolesApisConfigApisOutputReference <a name="DesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationRolesApisConfigApisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationRolesApisConfigApisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">SystemProvided</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SystemProvided`<sup>Required</sup> <a name="SystemProvided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```go
func SystemProvided() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationRolesApisConfigList <a name="DesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationRolesApisConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationRolesApisConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationRolesApisConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationRolesApisConfigOutputReference <a name="DesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationRolesApisConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationRolesApisConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis">PutApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis">ResetApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApis` <a name="PutApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```go
func PutApis(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoles` <a name="PutRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```go
func PutRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApis` <a name="ResetApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```go
func ResetApis()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```go
func ResetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis">Apis</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">ApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">RolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Apis`<sup>Required</sup> <a name="Apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```go
func Apis() DesignCenterApplicationRolesApisConfigApisList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```go
func Roles() DesignCenterApplicationRolesApisConfigRolesList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `ApisInput`<sup>Optional</sup> <a name="ApisInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```go
func ApisInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```go
func RolesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationRolesApisConfigRolesList <a name="DesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationRolesApisConfigRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DesignCenterApplicationRolesApisConfigRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get"></a>

```go
func Get(index *f64) DesignCenterApplicationRolesApisConfigRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationRolesApisConfigRolesOutputReference <a name="DesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationRolesApisConfigRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DesignCenterApplicationRolesApisConfigRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">SystemProvided</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SystemProvided`<sup>Required</sup> <a name="SystemProvided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```go
func SystemProvided() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DesignCenterApplicationScopeOutputReference <a name="DesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---


### DesignCenterApplicationSourceOutputReference <a name="DesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">ResetApplicationTemplateRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationTemplateRevision` <a name="ResetApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```go
func ResetApplicationTemplateRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">ApplicationTemplateRevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">ApplicationTemplateRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationTemplateRevisionInput`<sup>Optional</sup> <a name="ApplicationTemplateRevisionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```go
func ApplicationTemplateRevisionInput() *string
```

- *Type:* *string

---

##### `ApplicationTemplateRevision`<sup>Required</sup> <a name="ApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```go
func ApplicationTemplateRevision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---


### DesignCenterApplicationTimeoutsOutputReference <a name="DesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/designcenterapplication"

designcenterapplication.NewDesignCenterApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DesignCenterApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



