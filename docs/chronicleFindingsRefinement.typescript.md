# `chronicleFindingsRefinement` Submodule <a name="`chronicleFindingsRefinement` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinement <a name="ChronicleFindingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement google_chronicle_findings_refinement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

new chronicleFindingsRefinement.ChronicleFindingsRefinement(scope: Construct, id: string, config: ChronicleFindingsRefinementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig">ChronicleFindingsRefinementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig">ChronicleFindingsRefinementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters">putOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOutcomeFilters">resetOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutcomeFilters` <a name="putOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters"></a>

```typescript
public putOutcomeFilters(value: IResolvable | ChronicleFindingsRefinementOutcomeFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleFindingsRefinementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOutcomeFilters` <a name="resetOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOutcomeFilters"></a>

```typescript
public resetOutcomeFilters(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleFindingsRefinement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleFindingsRefinement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFilters">outcomeFilters</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList">ChronicleFindingsRefinementOutcomeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference">ChronicleFindingsRefinementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFiltersInput">outcomeFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outcomeFilters`<sup>Required</sup> <a name="outcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFilters"></a>

```typescript
public readonly outcomeFilters: ChronicleFindingsRefinementOutcomeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList">ChronicleFindingsRefinementOutcomeFiltersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleFindingsRefinementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference">ChronicleFindingsRefinementTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `outcomeFiltersInput`<sup>Optional</sup> <a name="outcomeFiltersInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFiltersInput"></a>

```typescript
public readonly outcomeFiltersInput: IResolvable | ChronicleFindingsRefinementOutcomeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleFindingsRefinementTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementConfig <a name="ChronicleFindingsRefinementConfig" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

const chronicleFindingsRefinementConfig: chronicleFindingsRefinement.ChronicleFindingsRefinementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.outcomeFilters">outcomeFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]</code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.query">query</a></code> | <code>string</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.type">type</a></code> | <code>string</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#instance ChronicleFindingsRefinement#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#location ChronicleFindingsRefinement#location}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#display_name ChronicleFindingsRefinement#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outcomeFilters`<sup>Optional</sup> <a name="outcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.outcomeFilters"></a>

```typescript
public readonly outcomeFilters: IResolvable | ChronicleFindingsRefinementOutcomeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#outcome_filters ChronicleFindingsRefinement#outcome_filters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#query ChronicleFindingsRefinement#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleFindingsRefinementTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#timeouts ChronicleFindingsRefinement#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#type ChronicleFindingsRefinement#type}

---

### ChronicleFindingsRefinementOutcomeFilters <a name="ChronicleFindingsRefinementOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

const chronicleFindingsRefinementOutcomeFilters: chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator">outcomeFilterOperator</a></code> | <code>string</code> | The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeValue">outcomeValue</a></code> | <code>string</code> | The value of the outcome variable to match. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable">outcomeVariable</a></code> | <code>string</code> | The outcome variable name. |

---

##### `outcomeFilterOperator`<sup>Required</sup> <a name="outcomeFilterOperator" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator"></a>

```typescript
public readonly outcomeFilterOperator: string;
```

- *Type:* string

The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#outcome_filter_operator ChronicleFindingsRefinement#outcome_filter_operator}

---

##### `outcomeValue`<sup>Required</sup> <a name="outcomeValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeValue"></a>

```typescript
public readonly outcomeValue: string;
```

- *Type:* string

The value of the outcome variable to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#outcome_value ChronicleFindingsRefinement#outcome_value}

---

##### `outcomeVariable`<sup>Required</sup> <a name="outcomeVariable" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable"></a>

```typescript
public readonly outcomeVariable: string;
```

- *Type:* string

The outcome variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#outcome_variable ChronicleFindingsRefinement#outcome_variable}

---

### ChronicleFindingsRefinementTimeouts <a name="ChronicleFindingsRefinementTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

const chronicleFindingsRefinementTimeouts: chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementOutcomeFiltersList <a name="ChronicleFindingsRefinementOutcomeFiltersList" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

new chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get"></a>

```typescript
public get(index: number): ChronicleFindingsRefinementOutcomeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleFindingsRefinementOutcomeFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>[]

---


### ChronicleFindingsRefinementOutcomeFiltersOutputReference <a name="ChronicleFindingsRefinementOutcomeFiltersOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

new chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput">outcomeFilterOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput">outcomeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput">outcomeVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator">outcomeFilterOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue">outcomeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable">outcomeVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outcomeFilterOperatorInput`<sup>Optional</sup> <a name="outcomeFilterOperatorInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput"></a>

```typescript
public readonly outcomeFilterOperatorInput: string;
```

- *Type:* string

---

##### `outcomeValueInput`<sup>Optional</sup> <a name="outcomeValueInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput"></a>

```typescript
public readonly outcomeValueInput: string;
```

- *Type:* string

---

##### `outcomeVariableInput`<sup>Optional</sup> <a name="outcomeVariableInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput"></a>

```typescript
public readonly outcomeVariableInput: string;
```

- *Type:* string

---

##### `outcomeFilterOperator`<sup>Required</sup> <a name="outcomeFilterOperator" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator"></a>

```typescript
public readonly outcomeFilterOperator: string;
```

- *Type:* string

---

##### `outcomeValue`<sup>Required</sup> <a name="outcomeValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue"></a>

```typescript
public readonly outcomeValue: string;
```

- *Type:* string

---

##### `outcomeVariable`<sup>Required</sup> <a name="outcomeVariable" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable"></a>

```typescript
public readonly outcomeVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleFindingsRefinementOutcomeFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>

---


### ChronicleFindingsRefinementTimeoutsOutputReference <a name="ChronicleFindingsRefinementTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleFindingsRefinement } from '@cdktn/provider-google'

new chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleFindingsRefinementTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---



