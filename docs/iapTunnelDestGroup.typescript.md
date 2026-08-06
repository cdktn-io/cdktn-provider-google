# `iapTunnelDestGroup` Submodule <a name="`iapTunnelDestGroup` Submodule" id="@cdktn/provider-google.iapTunnelDestGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapTunnelDestGroup <a name="IapTunnelDestGroup" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group google_iap_tunnel_dest_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

new iapTunnelDestGroup.IapTunnelDestGroup(scope: Construct, id: string, config: IapTunnelDestGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig">IapTunnelDestGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig">IapTunnelDestGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetCidrs">resetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetFqdns">resetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: IapTunnelDestGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a>

---

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetCidrs"></a>

```typescript
public resetCidrs(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetFqdns` <a name="resetFqdns" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetFqdns"></a>

```typescript
public resetFqdns(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IapTunnelDestGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isConstruct"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

iapTunnelDestGroup.IapTunnelDestGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isTerraformElement"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

iapTunnelDestGroup.IapTunnelDestGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isTerraformResource"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

iapTunnelDestGroup.IapTunnelDestGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IapTunnelDestGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapTunnelDestGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapTunnelDestGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IapTunnelDestGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference">IapTunnelDestGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.fqdnsInput">fqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.timeouts"></a>

```typescript
public readonly timeouts: IapTunnelDestGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference">IapTunnelDestGroupTimeoutsOutputReference</a>

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `fqdnsInput`<sup>Optional</sup> <a name="fqdnsInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.fqdnsInput"></a>

```typescript
public readonly fqdnsInput: string[];
```

- *Type:* string[]

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IapTunnelDestGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapTunnelDestGroupConfig <a name="IapTunnelDestGroupConfig" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.Initializer"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

const iapTunnelDestGroupConfig: iapTunnelDestGroup.IapTunnelDestGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.groupName">groupName</a></code> | <code>string</code> | Unique tunnel destination group name. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.cidrs">cidrs</a></code> | <code>string[]</code> | List of CIDRs that this group applies to. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.fqdns">fqdns</a></code> | <code>string[]</code> | List of FQDNs that this group applies to. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#id IapTunnelDestGroup#id}. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#project IapTunnelDestGroup#project}. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.region">region</a></code> | <code>string</code> | The region of the tunnel group. Must be the same as the network resources in the group. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Unique tunnel destination group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#group_name IapTunnelDestGroup#group_name}

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

List of CIDRs that this group applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#cidrs IapTunnelDestGroup#cidrs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#deletion_policy IapTunnelDestGroup#deletion_policy}

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

List of FQDNs that this group applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#fqdns IapTunnelDestGroup#fqdns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#id IapTunnelDestGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#project IapTunnelDestGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the tunnel group. Must be the same as the network resources in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#region IapTunnelDestGroup#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IapTunnelDestGroupTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#timeouts IapTunnelDestGroup#timeouts}

---

### IapTunnelDestGroupTimeouts <a name="IapTunnelDestGroupTimeouts" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.Initializer"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

const iapTunnelDestGroupTimeouts: iapTunnelDestGroup.IapTunnelDestGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#create IapTunnelDestGroup#create}. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#delete IapTunnelDestGroup#delete}. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#update IapTunnelDestGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#create IapTunnelDestGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#delete IapTunnelDestGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/iap_tunnel_dest_group#update IapTunnelDestGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapTunnelDestGroupTimeoutsOutputReference <a name="IapTunnelDestGroupTimeoutsOutputReference" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { iapTunnelDestGroup } from '@cdktn/provider-google'

new iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IapTunnelDestGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iapTunnelDestGroup.IapTunnelDestGroupTimeouts">IapTunnelDestGroupTimeouts</a>

---



