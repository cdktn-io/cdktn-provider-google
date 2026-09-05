# `dataGoogleIapAgentRegistryAgentIamPolicy` Submodule <a name="`dataGoogleIapAgentRegistryAgentIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapAgentRegistryAgentIamPolicy <a name="DataGoogleIapAgentRegistryAgentIamPolicy" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy google_iap_agent_registry_agent_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer"></a>

```typescript
import { dataGoogleIapAgentRegistryAgentIamPolicy } from '@cdktn/provider-google'

new dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy(scope: Construct, id: string, config: DataGoogleIapAgentRegistryAgentIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig">DataGoogleIapAgentRegistryAgentIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig">DataGoogleIapAgentRegistryAgentIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIapAgentRegistryAgentIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleIapAgentRegistryAgentIamPolicy } from '@cdktn/provider-google'

dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleIapAgentRegistryAgentIamPolicy } from '@cdktn/provider-google'

dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleIapAgentRegistryAgentIamPolicy } from '@cdktn/provider-google'

dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleIapAgentRegistryAgentIamPolicy } from '@cdktn/provider-google'

dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleIapAgentRegistryAgentIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIapAgentRegistryAgentIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIapAgentRegistryAgentIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIapAgentRegistryAgentIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapAgentRegistryAgentIamPolicyConfig <a name="DataGoogleIapAgentRegistryAgentIamPolicyConfig" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleIapAgentRegistryAgentIamPolicy } from '@cdktn/provider-google'

const dataGoogleIapAgentRegistryAgentIamPolicyConfig: dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#agent_id DataGoogleIapAgentRegistryAgentIamPolicy#agent_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#id DataGoogleIapAgentRegistryAgentIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#location DataGoogleIapAgentRegistryAgentIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#project DataGoogleIapAgentRegistryAgentIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#agent_id DataGoogleIapAgentRegistryAgentIamPolicy#agent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#id DataGoogleIapAgentRegistryAgentIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#location DataGoogleIapAgentRegistryAgentIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleIapAgentRegistryAgentIamPolicy.DataGoogleIapAgentRegistryAgentIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iap_agent_registry_agent_iam_policy#project DataGoogleIapAgentRegistryAgentIamPolicy#project}.

---



