# `saasRuntimeRelease` Submodule <a name="`saasRuntimeRelease` Submodule" id="@cdktn/provider-google.saasRuntimeRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRelease <a name="SaasRuntimeRelease" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release google_saas_runtime_release}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeRelease(scope: Construct, id: string, config: SaasRuntimeReleaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig">SaasRuntimeReleaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig">SaasRuntimeReleaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint">putBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults">putInputVariableDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements">putReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetBlueprint">resetBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetInputVariableDefaults">resetInputVariableDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetReleaseRequirements">resetReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlueprint` <a name="putBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint"></a>

```typescript
public putBlueprint(value: SaasRuntimeReleaseBlueprint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---

##### `putInputVariableDefaults` <a name="putInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults"></a>

```typescript
public putInputVariableDefaults(value: IResolvable | SaasRuntimeReleaseInputVariableDefaults[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

---

##### `putReleaseRequirements` <a name="putReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements"></a>

```typescript
public putReleaseRequirements(value: SaasRuntimeReleaseReleaseRequirements): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts"></a>

```typescript
public putTimeouts(value: SaasRuntimeReleaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBlueprint` <a name="resetBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetBlueprint"></a>

```typescript
public resetBlueprint(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputVariableDefaults` <a name="resetInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetInputVariableDefaults"></a>

```typescript
public resetInputVariableDefaults(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReleaseRequirements` <a name="resetReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetReleaseRequirements"></a>

```typescript
public resetReleaseRequirements(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

saasRuntimeRelease.SaasRuntimeRelease.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeRelease to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.applicationTemplateComponent">applicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList">SaasRuntimeReleaseApplicationTemplateComponentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprint">blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference">SaasRuntimeReleaseBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaults">inputVariableDefaults</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList">SaasRuntimeReleaseInputVariableDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList">SaasRuntimeReleaseInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.outputVariables">outputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList">SaasRuntimeReleaseOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirements">releaseRequirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference">SaasRuntimeReleaseReleaseRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference">SaasRuntimeReleaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprintInput">blueprintInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaultsInput">inputVariableDefaultsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseIdInput">releaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirementsInput">releaseRequirementsInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKindInput">unitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseId">releaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKind">unitKind</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationTemplateComponent`<sup>Required</sup> <a name="applicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.applicationTemplateComponent"></a>

```typescript
public readonly applicationTemplateComponent: SaasRuntimeReleaseApplicationTemplateComponentList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList">SaasRuntimeReleaseApplicationTemplateComponentList</a>

---

##### `blueprint`<sup>Required</sup> <a name="blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprint"></a>

```typescript
public readonly blueprint: SaasRuntimeReleaseBlueprintOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference">SaasRuntimeReleaseBlueprintOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `inputVariableDefaults`<sup>Required</sup> <a name="inputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaults"></a>

```typescript
public readonly inputVariableDefaults: SaasRuntimeReleaseInputVariableDefaultsList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList">SaasRuntimeReleaseInputVariableDefaultsList</a>

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariables"></a>

```typescript
public readonly inputVariables: SaasRuntimeReleaseInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList">SaasRuntimeReleaseInputVariablesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.outputVariables"></a>

```typescript
public readonly outputVariables: SaasRuntimeReleaseOutputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList">SaasRuntimeReleaseOutputVariablesList</a>

---

##### `releaseRequirements`<sup>Required</sup> <a name="releaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirements"></a>

```typescript
public readonly releaseRequirements: SaasRuntimeReleaseReleaseRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference">SaasRuntimeReleaseReleaseRequirementsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeReleaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference">SaasRuntimeReleaseTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `blueprintInput`<sup>Optional</sup> <a name="blueprintInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprintInput"></a>

```typescript
public readonly blueprintInput: SaasRuntimeReleaseBlueprint;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputVariableDefaultsInput`<sup>Optional</sup> <a name="inputVariableDefaultsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaultsInput"></a>

```typescript
public readonly inputVariableDefaultsInput: IResolvable | SaasRuntimeReleaseInputVariableDefaults[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `releaseIdInput`<sup>Optional</sup> <a name="releaseIdInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseIdInput"></a>

```typescript
public readonly releaseIdInput: string;
```

- *Type:* string

---

##### `releaseRequirementsInput`<sup>Optional</sup> <a name="releaseRequirementsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirementsInput"></a>

```typescript
public readonly releaseRequirementsInput: SaasRuntimeReleaseReleaseRequirements;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SaasRuntimeReleaseTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKindInput"></a>

```typescript
public readonly unitKindInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `releaseId`<sup>Required</sup> <a name="releaseId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseId"></a>

```typescript
public readonly releaseId: string;
```

- *Type:* string

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeReleaseApplicationTemplateComponent <a name="SaasRuntimeReleaseApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseApplicationTemplateComponent: saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent = { ... }
```


### SaasRuntimeReleaseApplicationTemplateComponentCompositeRef <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseApplicationTemplateComponentCompositeRef: saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef = { ... }
```


### SaasRuntimeReleaseBlueprint <a name="SaasRuntimeReleaseBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseBlueprint: saasRuntimeRelease.SaasRuntimeReleaseBlueprint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.property.package">package</a></code> | <code>string</code> | URI to a blueprint used by the Unit (required unless unitKind or release is set). |

---

##### `package`<sup>Optional</sup> <a name="package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

URI to a blueprint used by the Unit (required unless unitKind or release is set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#package SaasRuntimeRelease#package}

---

### SaasRuntimeReleaseConfig <a name="SaasRuntimeReleaseConfig" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseConfig: saasRuntimeRelease.SaasRuntimeReleaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseId">releaseId</a></code> | <code>string</code> | The ID value for the new release. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.unitKind">unitKind</a></code> | <code>string</code> | Reference to the UnitKind this Release corresponds to (required and immutable once created). |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.blueprint">blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | blueprint block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.inputVariableDefaults">inputVariableDefaults</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]</code> | input_variable_defaults block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseRequirements">releaseRequirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | release_requirements block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#location SaasRuntimeRelease#location}

---

##### `releaseId`<sup>Required</sup> <a name="releaseId" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseId"></a>

```typescript
public readonly releaseId: string;
```

- *Type:* string

The ID value for the new release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_id SaasRuntimeRelease#release_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

Reference to the UnitKind this Release corresponds to (required and immutable once created).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#unit_kind SaasRuntimeRelease#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#annotations SaasRuntimeRelease#annotations}

---

##### `blueprint`<sup>Optional</sup> <a name="blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.blueprint"></a>

```typescript
public readonly blueprint: SaasRuntimeReleaseBlueprint;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#blueprint SaasRuntimeRelease#blueprint}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#deletion_policy SaasRuntimeRelease#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableDefaults`<sup>Optional</sup> <a name="inputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.inputVariableDefaults"></a>

```typescript
public readonly inputVariableDefaults: IResolvable | SaasRuntimeReleaseInputVariableDefaults[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

input_variable_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#input_variable_defaults SaasRuntimeRelease#input_variable_defaults}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#labels SaasRuntimeRelease#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}.

---

##### `releaseRequirements`<sup>Optional</sup> <a name="releaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseRequirements"></a>

```typescript
public readonly releaseRequirements: SaasRuntimeReleaseReleaseRequirements;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

release_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_requirements SaasRuntimeRelease#release_requirements}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeReleaseTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#timeouts SaasRuntimeRelease#timeouts}

---

### SaasRuntimeReleaseInputVariableDefaults <a name="SaasRuntimeReleaseInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseInputVariableDefaults: saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.variable">variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.type">type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"]. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.value">value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#variable SaasRuntimeRelease#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#type SaasRuntimeRelease#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#value SaasRuntimeRelease#value}

---

### SaasRuntimeReleaseInputVariables <a name="SaasRuntimeReleaseInputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseInputVariables: saasRuntimeRelease.SaasRuntimeReleaseInputVariables = { ... }
```


### SaasRuntimeReleaseOutputVariables <a name="SaasRuntimeReleaseOutputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseOutputVariables: saasRuntimeRelease.SaasRuntimeReleaseOutputVariables = { ... }
```


### SaasRuntimeReleaseReleaseRequirements <a name="SaasRuntimeReleaseReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseReleaseRequirements: saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.property.upgradeableFromReleases">upgradeableFromReleases</a></code> | <code>string[]</code> | A list of releases from which a unit can be upgraded to this one (optional). |

---

##### `upgradeableFromReleases`<sup>Optional</sup> <a name="upgradeableFromReleases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.property.upgradeableFromReleases"></a>

```typescript
public readonly upgradeableFromReleases: string[];
```

- *Type:* string[]

A list of releases from which a unit can be upgraded to this one (optional).

If left empty no constraints will be applied. When provided,
unit upgrade requests to this release will check and enforce this
constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#upgradeable_from_releases SaasRuntimeRelease#upgradeable_from_releases}

---

### SaasRuntimeReleaseTimeouts <a name="SaasRuntimeReleaseTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

const saasRuntimeReleaseTimeouts: saasRuntimeRelease.SaasRuntimeReleaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get"></a>

```typescript
public get(index: number): SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">applicationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">syncOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef">SaasRuntimeReleaseApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationTemplate`<sup>Required</sup> <a name="applicationTemplate" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```typescript
public readonly applicationTemplate: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `syncOperation`<sup>Required</sup> <a name="syncOperation" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```typescript
public readonly syncOperation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeReleaseApplicationTemplateComponentCompositeRef;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef">SaasRuntimeReleaseApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeReleaseApplicationTemplateComponentList <a name="SaasRuntimeReleaseApplicationTemplateComponentList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get"></a>

```typescript
public get(index: number): SaasRuntimeReleaseApplicationTemplateComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SaasRuntimeReleaseApplicationTemplateComponentOutputReference <a name="SaasRuntimeReleaseApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.compositeRef">compositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList">SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent">SaasRuntimeReleaseApplicationTemplateComponent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `compositeRef`<sup>Required</sup> <a name="compositeRef" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```typescript
public readonly compositeRef: SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList">SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeReleaseApplicationTemplateComponent;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent">SaasRuntimeReleaseApplicationTemplateComponent</a>

---


### SaasRuntimeReleaseBlueprintOutputReference <a name="SaasRuntimeReleaseBlueprintOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resetPackage">resetPackage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPackage` <a name="resetPackage" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resetPackage"></a>

```typescript
public resetPackage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeReleaseBlueprint;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---


### SaasRuntimeReleaseInputVariableDefaultsList <a name="SaasRuntimeReleaseInputVariableDefaultsList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get"></a>

```typescript
public get(index: number): SaasRuntimeReleaseInputVariableDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeReleaseInputVariableDefaults[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>[]

---


### SaasRuntimeReleaseInputVariableDefaultsOutputReference <a name="SaasRuntimeReleaseInputVariableDefaultsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeReleaseInputVariableDefaults;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>

---


### SaasRuntimeReleaseInputVariablesList <a name="SaasRuntimeReleaseInputVariablesList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get"></a>

```typescript
public get(index: number): SaasRuntimeReleaseInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SaasRuntimeReleaseInputVariablesOutputReference <a name="SaasRuntimeReleaseInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables">SaasRuntimeReleaseInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeReleaseInputVariables;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables">SaasRuntimeReleaseInputVariables</a>

---


### SaasRuntimeReleaseOutputVariablesList <a name="SaasRuntimeReleaseOutputVariablesList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get"></a>

```typescript
public get(index: number): SaasRuntimeReleaseOutputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SaasRuntimeReleaseOutputVariablesOutputReference <a name="SaasRuntimeReleaseOutputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables">SaasRuntimeReleaseOutputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeReleaseOutputVariables;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables">SaasRuntimeReleaseOutputVariables</a>

---


### SaasRuntimeReleaseReleaseRequirementsOutputReference <a name="SaasRuntimeReleaseReleaseRequirementsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resetUpgradeableFromReleases">resetUpgradeableFromReleases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpgradeableFromReleases` <a name="resetUpgradeableFromReleases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resetUpgradeableFromReleases"></a>

```typescript
public resetUpgradeableFromReleases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleasesInput">upgradeableFromReleasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleases">upgradeableFromReleases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `upgradeableFromReleasesInput`<sup>Optional</sup> <a name="upgradeableFromReleasesInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleasesInput"></a>

```typescript
public readonly upgradeableFromReleasesInput: string[];
```

- *Type:* string[]

---

##### `upgradeableFromReleases`<sup>Required</sup> <a name="upgradeableFromReleases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleases"></a>

```typescript
public readonly upgradeableFromReleases: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeReleaseReleaseRequirements;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---


### SaasRuntimeReleaseTimeoutsOutputReference <a name="SaasRuntimeReleaseTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRelease } from '@cdktn/provider-google'

new saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeReleaseTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---



