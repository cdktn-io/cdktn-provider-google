# `chronicleWatchlist` Submodule <a name="`chronicleWatchlist` Submodule" id="@cdktn/provider-google.chronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleWatchlist <a name="ChronicleWatchlist" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlist(scope: Construct, id: string, config: ChronicleWatchlistConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig">ChronicleWatchlistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig">ChronicleWatchlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism">putEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences">putWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor">resetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId">resetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences">resetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityPopulationMechanism` <a name="putEntityPopulationMechanism" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism"></a>

```typescript
public putEntityPopulationMechanism(value: ChronicleWatchlistEntityPopulationMechanism): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleWatchlistTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---

##### `putWatchlistUserPreferences` <a name="putWatchlistUserPreferences" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences"></a>

```typescript
public putWatchlistUserPreferences(value: ChronicleWatchlistWatchlistUserPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiplyingFactor` <a name="resetMultiplyingFactor" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor"></a>

```typescript
public resetMultiplyingFactor(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWatchlistId` <a name="resetWatchlistId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId"></a>

```typescript
public resetWatchlistId(): void
```

##### `resetWatchlistUserPreferences` <a name="resetWatchlistUserPreferences" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences"></a>

```typescript
public resetWatchlistUserPreferences(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleWatchlist resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

chronicleWatchlist.ChronicleWatchlist.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

chronicleWatchlist.ChronicleWatchlist.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

chronicleWatchlist.ChronicleWatchlist.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

chronicleWatchlist.ChronicleWatchlist.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleWatchlist resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleWatchlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount">entityCount</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput">entityPopulationMechanismInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput">multiplyingFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput">watchlistIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput">watchlistUserPreferencesInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor">multiplyingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId">watchlistId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `entityCount`<sup>Required</sup> <a name="entityCount" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount"></a>

```typescript
public readonly entityCount: ChronicleWatchlistEntityCountList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a>

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism"></a>

```typescript
public readonly entityPopulationMechanism: ChronicleWatchlistEntityPopulationMechanismOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleWatchlistTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `watchlistUserPreferences`<sup>Required</sup> <a name="watchlistUserPreferences" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences"></a>

```typescript
public readonly watchlistUserPreferences: ChronicleWatchlistWatchlistUserPreferencesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entityPopulationMechanismInput`<sup>Optional</sup> <a name="entityPopulationMechanismInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```typescript
public readonly entityPopulationMechanismInput: ChronicleWatchlistEntityPopulationMechanism;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multiplyingFactorInput`<sup>Optional</sup> <a name="multiplyingFactorInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput"></a>

```typescript
public readonly multiplyingFactorInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleWatchlistTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---

##### `watchlistIdInput`<sup>Optional</sup> <a name="watchlistIdInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput"></a>

```typescript
public readonly watchlistIdInput: string;
```

- *Type:* string

---

##### `watchlistUserPreferencesInput`<sup>Optional</sup> <a name="watchlistUserPreferencesInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```typescript
public readonly watchlistUserPreferencesInput: ChronicleWatchlistWatchlistUserPreferences;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multiplyingFactor`<sup>Required</sup> <a name="multiplyingFactor" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor"></a>

```typescript
public readonly multiplyingFactor: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `watchlistId`<sup>Required</sup> <a name="watchlistId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId"></a>

```typescript
public readonly watchlistId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleWatchlistConfig <a name="ChronicleWatchlistConfig" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

const chronicleWatchlistConfig: chronicleWatchlist.ChronicleWatchlistConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor">multiplyingFactor</a></code> | <code>number</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId">watchlistId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```typescript
public readonly entityPopulationMechanism: ChronicleWatchlistEntityPopulationMechanism;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#deletion_policy ChronicleWatchlist#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplyingFactor`<sup>Optional</sup> <a name="multiplyingFactor" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor"></a>

```typescript
public readonly multiplyingFactor: number;
```

- *Type:* number

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleWatchlistTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `watchlistId`<sup>Optional</sup> <a name="watchlistId" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId"></a>

```typescript
public readonly watchlistId: string;
```

- *Type:* string

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `watchlistUserPreferences`<sup>Optional</sup> <a name="watchlistUserPreferences" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```typescript
public readonly watchlistUserPreferences: ChronicleWatchlistWatchlistUserPreferences;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

### ChronicleWatchlistEntityCount <a name="ChronicleWatchlistEntityCount" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

const chronicleWatchlistEntityCount: chronicleWatchlist.ChronicleWatchlistEntityCount = { ... }
```


### ChronicleWatchlistEntityPopulationMechanism <a name="ChronicleWatchlistEntityPopulationMechanism" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

const chronicleWatchlistEntityPopulationMechanism: chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual">manual</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```typescript
public readonly manual: ChronicleWatchlistEntityPopulationMechanismManual;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}

---

### ChronicleWatchlistEntityPopulationMechanismManual <a name="ChronicleWatchlistEntityPopulationMechanismManual" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

const chronicleWatchlistEntityPopulationMechanismManual: chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual = { ... }
```


### ChronicleWatchlistTimeouts <a name="ChronicleWatchlistTimeouts" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

const chronicleWatchlistTimeouts: chronicleWatchlist.ChronicleWatchlistTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}.

---

### ChronicleWatchlistWatchlistUserPreferences <a name="ChronicleWatchlistWatchlistUserPreferences" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

const chronicleWatchlistWatchlistUserPreferences: chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned">pinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```typescript
public readonly pinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleWatchlistEntityCountList <a name="ChronicleWatchlistEntityCountList" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlistEntityCountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get"></a>

```typescript
public get(index: number): ChronicleWatchlistEntityCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ChronicleWatchlistEntityCountOutputReference <a name="ChronicleWatchlistEntityCountOutputReference" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset">asset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user">user</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```typescript
public readonly asset: number;
```

- *Type:* number

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user"></a>

```typescript
public readonly user: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleWatchlistEntityCount;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a>

---


### ChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleWatchlistEntityPopulationMechanismManual;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---


### ChronicleWatchlistEntityPopulationMechanismOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">putManual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">resetManual</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManual` <a name="putManual" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```typescript
public putManual(value: ChronicleWatchlistEntityPopulationMechanismManual): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `resetManual` <a name="resetManual" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```typescript
public resetManual(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">manualInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```typescript
public readonly manual: ChronicleWatchlistEntityPopulationMechanismManualOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `manualInput`<sup>Optional</sup> <a name="manualInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```typescript
public readonly manualInput: ChronicleWatchlistEntityPopulationMechanismManual;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleWatchlistEntityPopulationMechanism;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---


### ChronicleWatchlistTimeoutsOutputReference <a name="ChronicleWatchlistTimeoutsOutputReference" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleWatchlistTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---


### ChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="ChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```typescript
import { chronicleWatchlist } from '@cdktn/provider-google'

new chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">resetPinned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinned` <a name="resetPinned" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```typescript
public resetPinned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">pinnedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">pinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```typescript
public readonly pinnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```typescript
public readonly pinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleWatchlistWatchlistUserPreferences;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---



