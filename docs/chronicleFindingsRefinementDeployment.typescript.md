# `chronicleFindingsRefinementDeployment` Submodule <a name="`chronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinementDeployment <a name="ChronicleFindingsRefinementDeployment" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

new chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment(scope: Construct, id: string, config: ChronicleFindingsRefinementDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig">ChronicleFindingsRefinementDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig">ChronicleFindingsRefinementDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">putDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">resetDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectionExclusionApplication` <a name="putDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```typescript
public putDetectionExclusionApplication(value: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleFindingsRefinementDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `resetArchived` <a name="resetArchived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetDetectionExclusionApplication` <a name="resetDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```typescript
public resetDetectionExclusionApplication(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleFindingsRefinementDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">detectionExclusionApplicationInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput">findingsRefinementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived">archived</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement">findingsRefinement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `detectionExclusionApplication`<sup>Required</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```typescript
public readonly detectionExclusionApplication: ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleFindingsRefinementDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectionExclusionApplicationInput`<sup>Optional</sup> <a name="detectionExclusionApplicationInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```typescript
public readonly detectionExclusionApplicationInput: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `findingsRefinementInput`<sup>Optional</sup> <a name="findingsRefinementInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```typescript
public readonly findingsRefinementInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleFindingsRefinementDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```typescript
public readonly findingsRefinement: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementDeploymentConfig <a name="ChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

const chronicleFindingsRefinementDeploymentConfig: chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">findingsRefinement</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived">archived</a></code> | <code>boolean \| cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```typescript
public readonly findingsRefinement: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}

---

##### `detectionExclusionApplication`<sup>Optional</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```typescript
public readonly detectionExclusionApplication: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleFindingsRefinementDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}

---

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

const chronicleFindingsRefinementDeploymentDetectionExclusionApplication: chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">curatedRules</a></code> | <code>string[]</code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">curatedRuleSets</a></code> | <code>string[]</code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">rules</a></code> | <code>string[]</code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `curatedRules`<sup>Optional</sup> <a name="curatedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```typescript
public readonly curatedRules: string[];
```

- *Type:* string[]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#curated_rules ChronicleFindingsRefinementDeployment#curated_rules}

---

##### `curatedRuleSets`<sup>Optional</sup> <a name="curatedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```typescript
public readonly curatedRuleSets: string[];
```

- *Type:* string[]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#curated_rule_sets ChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#rules ChronicleFindingsRefinementDeployment#rules}

---

### ChronicleFindingsRefinementDeploymentTimeouts <a name="ChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

const chronicleFindingsRefinementDeploymentTimeouts: chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

new chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">resetCuratedRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">resetCuratedRuleSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCuratedRules` <a name="resetCuratedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```typescript
public resetCuratedRules(): void
```

##### `resetCuratedRuleSets` <a name="resetCuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```typescript
public resetCuratedRuleSets(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">deletedCuratedRuleSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">curatedRuleSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">curatedRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">rulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">curatedRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">curatedRuleSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletedCuratedRuleSets`<sup>Required</sup> <a name="deletedCuratedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```typescript
public readonly deletedCuratedRuleSets: string[];
```

- *Type:* string[]

---

##### `curatedRuleSetsInput`<sup>Optional</sup> <a name="curatedRuleSetsInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```typescript
public readonly curatedRuleSetsInput: string[];
```

- *Type:* string[]

---

##### `curatedRulesInput`<sup>Optional</sup> <a name="curatedRulesInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```typescript
public readonly curatedRulesInput: string[];
```

- *Type:* string[]

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: string[];
```

- *Type:* string[]

---

##### `curatedRules`<sup>Required</sup> <a name="curatedRules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```typescript
public readonly curatedRules: string[];
```

- *Type:* string[]

---

##### `curatedRuleSets`<sup>Required</sup> <a name="curatedRuleSets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```typescript
public readonly curatedRuleSets: string[];
```

- *Type:* string[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### ChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="ChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleFindingsRefinementDeployment } from '@cdktn/provider-google'

new chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleFindingsRefinementDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---



