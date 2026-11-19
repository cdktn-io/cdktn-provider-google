# `cloudIdentityPolicy` Submodule <a name="`cloudIdentityPolicy` Submodule" id="@cdktn/provider-google.cloudIdentityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityPolicy <a name="CloudIdentityPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy google_cloud_identity_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

new cloudIdentityPolicy.CloudIdentityPolicy(scope: Construct, id: string, config: CloudIdentityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig">CloudIdentityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig">CloudIdentityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putPolicyQuery">putPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyQuery` <a name="putPolicyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putPolicyQuery"></a>

```typescript
public putPolicyQuery(value: CloudIdentityPolicyPolicyQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putPolicyQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

---

##### `putSetting` <a name="putSetting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putSetting"></a>

```typescript
public putSetting(value: CloudIdentityPolicySetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudIdentityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isConstruct"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

cloudIdentityPolicy.CloudIdentityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudIdentityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudIdentityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudIdentityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference">CloudIdentityPolicyPolicyQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference">CloudIdentityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference">CloudIdentityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customerInput">customerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQueryInput">policyQueryInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.settingInput">settingInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQuery"></a>

```typescript
public readonly policyQuery: CloudIdentityPolicyPolicyQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference">CloudIdentityPolicyPolicyQueryOutputReference</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.setting"></a>

```typescript
public readonly setting: CloudIdentityPolicySettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference">CloudIdentityPolicySettingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference">CloudIdentityPolicyTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customerInput"></a>

```typescript
public readonly customerInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyQueryInput`<sup>Optional</sup> <a name="policyQueryInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.policyQueryInput"></a>

```typescript
public readonly policyQueryInput: CloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.settingInput"></a>

```typescript
public readonly settingInput: CloudIdentityPolicySetting;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudIdentityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityPolicyConfig <a name="CloudIdentityPolicyConfig" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

const cloudIdentityPolicyConfig: cloudIdentityPolicy.CloudIdentityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.customer">customer</a></code> | <code>string</code> | The customer that the Policy belongs to. Format: 'customers/{customer_id}'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | policy_query block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | setting block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

The customer that the Policy belongs to. Format: 'customers/{customer_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#customer CloudIdentityPolicy#customer}

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.policyQuery"></a>

```typescript
public readonly policyQuery: CloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

policy_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#policy_query CloudIdentityPolicy#policy_query}

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.setting"></a>

```typescript
public readonly setting: CloudIdentityPolicySetting;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#setting CloudIdentityPolicy#setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#deletion_policy CloudIdentityPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#timeouts CloudIdentityPolicy#timeouts}

---

### CloudIdentityPolicyPolicyQuery <a name="CloudIdentityPolicyPolicyQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

const cloudIdentityPolicyPolicyQuery: cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.orgUnit">orgUnit</a></code> | <code>string</code> | The OrgUnit the query applies to, in the format 'orgUnits/{org_unit_id}'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.group">group</a></code> | <code>string</code> | The group that the query applies to. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.query">query</a></code> | <code>string</code> | The CEL query that defines which entities the Policy applies to. |

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.orgUnit"></a>

```typescript
public readonly orgUnit: string;
```

- *Type:* string

The OrgUnit the query applies to, in the format 'orgUnits/{org_unit_id}'.

'{org_unit_id}' is the obfuscated org unit ID, the same value the Admin SDK
Directory API returns as 'orgUnitId' without its 'id:' prefix. Org unit paths
and display names are not resolved and are rejected for most settings.
For detector settings ('settings/detector.*'), the API ignores this value and
always applies the policy to, and returns, the customer's root org unit, so any
other value produces a diff; set it to the root org unit's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#org_unit CloudIdentityPolicy#org_unit}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The group that the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#group CloudIdentityPolicy#group}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The CEL query that defines which entities the Policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#query CloudIdentityPolicy#query}

---

### CloudIdentityPolicySetting <a name="CloudIdentityPolicySetting" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

const cloudIdentityPolicySetting: cloudIdentityPolicy.CloudIdentityPolicySetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.type">type</a></code> | <code>string</code> | The type of the Setting. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.valueJson">valueJson</a></code> | <code>string</code> | The value of the Setting as JSON string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#type CloudIdentityPolicy#type}

---

##### `valueJson`<sup>Required</sup> <a name="valueJson" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting.property.valueJson"></a>

```typescript
public readonly valueJson: string;
```

- *Type:* string

The value of the Setting as JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#value_json CloudIdentityPolicy#value_json}

---

### CloudIdentityPolicyTimeouts <a name="CloudIdentityPolicyTimeouts" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

const cloudIdentityPolicyTimeouts: cloudIdentityPolicy.CloudIdentityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#create CloudIdentityPolicy#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#delete CloudIdentityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#update CloudIdentityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#create CloudIdentityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#delete CloudIdentityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#update CloudIdentityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityPolicyPolicyQueryOutputReference <a name="CloudIdentityPolicyPolicyQueryOutputReference" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

new cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput">orgUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit">orgUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `orgUnitInput`<sup>Optional</sup> <a name="orgUnitInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput"></a>

```typescript
public readonly orgUnitInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit"></a>

```typescript
public readonly orgUnit: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyPolicyQuery">CloudIdentityPolicyPolicyQuery</a>

---


### CloudIdentityPolicySettingOutputReference <a name="CloudIdentityPolicySettingOutputReference" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

new cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJsonInput">valueJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJson">valueJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueJsonInput`<sup>Optional</sup> <a name="valueJsonInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJsonInput"></a>

```typescript
public readonly valueJsonInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `valueJson`<sup>Required</sup> <a name="valueJson" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.valueJson"></a>

```typescript
public readonly valueJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityPolicySetting;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicySetting">CloudIdentityPolicySetting</a>

---


### CloudIdentityPolicyTimeoutsOutputReference <a name="CloudIdentityPolicyTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudIdentityPolicy } from '@cdktn/provider-google'

new cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudIdentityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityPolicy.CloudIdentityPolicyTimeouts">CloudIdentityPolicyTimeouts</a>

---



